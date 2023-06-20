import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../libs/firebase";
import { AuthenticationInterface } from "../types/authentication-type";

export const authentication = async (payload: AuthenticationInterface) => {
    try {
        const collectionRef = collection(database, "users");
        const queryUser = query(collectionRef, where("username", "==", payload.username), where("password", "==", payload.password));
        const querySnapShoot = await getDocs(queryUser);

        if (querySnapShoot.size === 0) {
            throw new Error("Wrong Username / Password!");
        }

        let user: any = undefined;
        querySnapShoot.forEach((doc) => {
            user = {
                id: doc.id,
                ...doc.data()
            }
        });
        return user;
    } catch (err) {
        return Promise.reject(err);
    }
}