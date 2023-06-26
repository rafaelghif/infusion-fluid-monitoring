import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { database } from "../libs/firebase";

export const createToken = async (token: string) => {
    try {
        const tokenRef = collection(database, "tokens");
        const queryToken = query(tokenRef, where("token", "==", token));
        const querySnapShoot = await getDocs(queryToken);
        if (querySnapShoot.size === 0) {
            await addDoc(collection(database, "tokens"), { token });
        }
        return token;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateToken = async (token: string, userId: string) => {
    try {
        const userDoc = doc(database, "users", userId);
        await setDoc(userDoc, { token }, { merge: true });
    } catch (err) {
        return Promise.reject(err);
    }
}