import { addDoc, collection } from "firebase/firestore";
import { database } from "../libs/firebase";

export const createToken = async (token: string) => {
    try {
        const docRef = await addDoc(collection(database, "token"), { token });
        console.log("docRef", docRef);
    } catch (err) {
        console.error(err);
    }
}