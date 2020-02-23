export const checkNgoUserName = (db, userName) => {
  return db
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

export const registerNgo = (db, ngoDetails) => {
  console.log("Registering NGO");
  return db
    .ref("ngos/" + ngoDetails.userName)
    .set({
      ngoName: ngoDetails.ngoName,
      uniqueId: ngoDetails.uniqueId,
      registrationNo: ngoDetails.registrationNo,
      registeredDate: ngoDetails.registeredDate,
      registeredState: ngoDetails.registeredState,
      contactName: ngoDetails.contactName,
      telephone: ngoDetails.telephone,
      mobile: ngoDetails.mobile,
      address: ngoDetails.address
    })
    .then(() => console.log("NGO added"))
    .catch(err => console.log(err));
};
