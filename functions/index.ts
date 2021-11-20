import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

async function isFirstUser(): Promise<boolean> {
  const coll = await admin.firestore().collection("users").get();
  const isFirst = coll.size === 0;

  return isFirst;
}

async function checkArgs(args: any): Promise<void> {
  const { email, password, name, inviteCode } = args;

  if (!name || !password || !email || !inviteCode) {
    if (!inviteCode && !(await isFirstUser())) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing invite code"
      );
    } else if (inviteCode) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing name, password or email"
      );
    }
  }
}

export const register = functions.https.onCall(async (data, context) => {
  console.log(data);
  await checkArgs(data);
});
