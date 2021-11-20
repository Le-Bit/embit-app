import * as fbtest from "firebase-functions-test";
import * as admin from "firebase-admin";

import * as myFunctions from "../functions";

describe("register", () => {
  admin.initializeApp({ projectId: "embit-test" });
  it("should call the function", async () => {
    const wrapped = fbtest().wrap(myFunctions.register);
    await wrapped({ email: "" });
  });
});
