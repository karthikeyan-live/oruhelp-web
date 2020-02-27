import { fs } from "../../common/services/firebase";

export const checkNgoUserName = userName => {
  var docRef = fs.collection("ngos").doc(userName);

  return docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return false;
      } else {
        return true;
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const registerNgo = ngoDetails => {
  return fs
    .collection("ngos")
    .doc(ngoDetails.userName)
    .set({ ...ngoDetails });
};
