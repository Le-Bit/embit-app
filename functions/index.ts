import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { setupEmby, authenticateUser, usernameExists } from "./emby";
import { AuthenticationAuthenticationResult } from "./emby/openapigenerated/models";

admin.initializeApp();
exports.claims = require("./sync");

const firebaseCreateUser = async function (
  name: string,
  email: string,
  password: string,
  embyUser: AuthenticationAuthenticationResult
) {
  const isAdmin = embyUser?.user?.policy?.isAdministrator ? "admin" : "user";

  admin.auth().createUser({
    email,
    emailVerified: false,
    password,
    displayName: name,
    disabled: false,
    uid: name,
  });

  await admin
    .firestore()
    .collection("users")
    .doc(name)
    .set({
      name,
      email,
      emby: { User: embyUser },
    });

  await admin.firestore().collection(`users/${name}/claims`).doc(name).set({
    role: isAdmin,
  });
};

async function isFirstUser(): Promise<boolean> {
  const coll = await admin.firestore().collection("users").get();
  const isFirst = coll.size === 0;

  return isFirst;
}

async function checkArgs(args: any): Promise<void> {
  const { email, password, name, inviteCode } = args;

  if (!name || !password || !email) {
    console.log(name, password, email);
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing name or password or email"
    );
  }
  if (!isFirstUser && !inviteCode) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing invite code"
    );
  }
}

async function registerFirstUser(
  username: string,
  email: string,
  password: string
): Promise<void> {
  await setupEmby(username, password);
  const authResult = await authenticateUser(username, password);
  if (!authResult?.user?.name) {
    throw new functions.https.HttpsError(
      "internal",
      "please contact the admin"
    );
  }
  firebaseCreateUser(authResult.user.name, email, password, authResult);
}

async function registerUser(
  username: string,
  email: string,
  password: string,
  inviteCode: string
): Promise<void> {
  console.log(username, email, password, inviteCode);
  if (await usernameExists(username)) {
    console.log("username exists");
  }
}

export const register = functions.https.onCall(async (data, context) => {
  await checkArgs(data);
  if (await isFirstUser()) {
    await registerFirstUser(data.name, data.email, data.password);
  } else {
    await registerUser(data.name, data.email, data.password, data.inviteCode);
  }
});
