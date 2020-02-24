export const checkNgoUserName = (firebase, userName) => {
  return firebase.db
    .ref(`ngos/` + userName)
    .once("value")
    .then(function(snapshot) {
      if (snapshot.exists()) {
        return false;
      } else {
        return true;
      }
    });
};

export const registerNgo = (firebase, ngoDetails) => {
  return firebase.db.ref("ngos/" + ngoDetails.userName).set({
    ngoName: ngoDetails.ngoName,
    uniqueId: ngoDetails.uniqueId,
    registrationNo: ngoDetails.registrationNo,
    registeredDate: ngoDetails.registeredDate,
    registeredState: ngoDetails.registeredState,
    contactName: ngoDetails.contactName,
    telephone: ngoDetails.telephone,
    mobile: ngoDetails.mobile,
    address: ngoDetails.address,
    ownerUid: firebase.auth.currentUser.uid
  });
};
