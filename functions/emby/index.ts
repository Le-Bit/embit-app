import { Configuration } from "./openapigenerated/configuration";
import { UserServiceApi } from "./openapigenerated/apis/user-service-api";
import { AuthenticationAuthenticationResult } from "./openapigenerated/models/authentication-authentication-result";
import { lowerCaseKeys } from "../utils";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { UserDto } from "./openapigenerated/models";

const params = {
  "X-Emby-Client": "embit",
  "X-Emby-Device-Name": "embitserver",
  "X-Emby-Device-Id": "cloudfunction",
  "X-Emby-Client-Version": "na",
};

export async function setupEmby(
  name: string,
  password: string
): Promise<AuthenticationAuthenticationResult> {
  const confParams = {
    username: name,
    password: password,
    basePath: functions.config().emby.url,
    axiosConfig: { params },
  };
  const conf = new Configuration(confParams);
  const user: AuthenticationAuthenticationResult | undefined =
    await conf.init();
  if (user) {
    admin.firestore().collection("config").doc("emby").set(confParams);
    return user;
  } else {
    throw new Error("wrong credentials");
  }
}

export async function initEmby() {
  const configRef = admin.firestore().collection("config").doc("emby");
  const config = (await configRef.get()).data();
  let conf = new Configuration(config);
  await conf.init();
  return conf;
}

export async function authenticateUser(username: string, pw: string) {
  const embyConf = await initEmby();
  const userService = new UserServiceApi(embyConf);
  const user = await userService.postUsersAuthenticatebyname(
    { username, pw },
    "",
    { params }
  );

  return lowerCaseKeys(user.data);
}

export async function usernameExists(username: string) {
  const embyConf = await initEmby();
  const userService = new UserServiceApi(embyConf);
  const users = lowerCaseKeys((await userService.getUsersQuery()).data);
  const user = users.items.filter((user: UserDto) => user.name === username);
  return user.length > 0;
}
