import { auth, fs } from "../../common/services/firebase";

// signup
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signupUserDetails = (uid, userDetails) => {
  return fs
    .collection("user")
    .doc(uid)
    .set({ ...userDetails });
};
