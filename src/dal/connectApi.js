import db from '../components/utils/connectFirebase/connectFirebase';

export const getUserData = (name) => {
    return db.collection("users")
        .where("name", "==", name)
        .get()
        .then((querySnapshot) => {
            //docs get array data
            return querySnapshot.docs;
        })
        .catch((error) => {
            throw new Error(error);
        });
}

export const setUserData = (user) => {
    db.collection("users").add(user)
        .then((docRef) => {
            console.log("ok");
        })
        .catch((error) => {
            throw new Error(error);
        });
}