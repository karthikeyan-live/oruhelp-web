import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
class Firebase {
  constructor() {
    if (!process.env.REACT_APP_API_KEY) console.log("Firebase not configured");
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.fs = app.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  userFs = uid => this.fs.doc(`users/${uid}`);

  testMethod = () => {
    try {
      console.log("Test method");
      // this.fs
      //   .collection("users")
      //   .add({
      //     first: "Ada",
      //     last: "Lovelace",
      //     born: 1815
      //   })
      //   .then(function(docRef) {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch(function(error) {
      //     console.error("Error adding document: ", error);
      //   });

      this.fs
        .collection("account")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  usersFs = () => {
    console.log("passing firestore");
    try {
      this.fs
        .collection("users")
        .add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
}
export default Firebase;
