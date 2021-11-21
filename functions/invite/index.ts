import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export async function checkInvite(invite: string): Promise<boolean> {
  const db = admin.firestore();
  const invitesRef = db.collection("invites");
  const inviteRef = invitesRef.doc(invite);
  const inviteSnap = await inviteRef.get();
  const inviteStatus =
    inviteSnap.exists && inviteSnap.data() && !inviteSnap.data()?.used;
  return inviteStatus ? true : false;
}

export const generate = functions.https.onCall(async (data, context) => {
  /*
     if (!context.auth) {
     throw new functions.https.HttpsError(
     "unauthenticated",
     "User is not authenticated"
     );
     }
     */
  const db = admin.firestore();
  const invitesRef = db.collection("invites");
  const inviteRef = invitesRef.doc();
  const invite = inviteRef.id;
  const inviteData = {
    invite,
    used: false,
    user: context?.auth?.uid,
    created: admin.firestore.FieldValue.serverTimestamp(),
  };
  await inviteRef.set(inviteData);
  return invite;
});
