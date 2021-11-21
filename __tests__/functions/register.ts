import * as fbtest from "firebase-functions-test";
import * as admin from "firebase-admin";
import { Configuration } from "../../functions/emby/openapigenerated/configuration";
import { UserServiceApi } from "../../functions/emby/openapigenerated/apis/user-service-api";
import { AuthenticateUserByName } from "../../functions/emby/openapigenerated/models";

fbtest({ projectId: "embit-test" }).mockConfig({
  emby: { url: "http://localhost:8096" },
});

const authResult = {
  AccessToken: "token",
  User: {
    Id: "1",
    Name: "username",
    Policy: {
      IsAdministrator: true,
    },
  },
};

jest.mock("../../functions/emby/openapigenerated/configuration", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {
        init: () => {
          return authResult;
        },
      };
    }),
  };
});
Configuration;

jest.mock("../../functions/emby/openapigenerated/apis/user-service-api", () => {
  return {
    UserServiceApi: jest.fn().mockImplementation(() => {
      return {
        postUsersAuthenticatebyname: (data: AuthenticateUserByName) => {
          return {
            data: {
              User: {
                Id: 1,
                Name: data.username,
                Policy: { IsAdministrator: true },
              },
            },
          };
        },
      };
    }),
  };
});
UserServiceApi;

import * as myFunctions from "../../functions";

describe("register", () => {
  admin.initializeApp({ projectId: "embit-test" }, "embit-test");
  const wrapped = fbtest().wrap(myFunctions.register);

  afterAll(async () => {
    await fbtest().firestore.clearFirestoreData({ projectId: "embit-test" });
  });

  it("should register an admin as a first user", async () => {
    await wrapped({
      name: "admin",
      password: "admin1",
      email: "toutou@toto.com",
    });
    await wrapped({
      name: "admin2",
      password: "admin12",
      email: "toutou2@toto.com",
    });

    const user = await admin.firestore().collection("users").doc("admin").get();
    expect(user.data()).toBeDefined();
  });
});
