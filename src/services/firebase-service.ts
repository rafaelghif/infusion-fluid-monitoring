import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"
import { database } from "../libs/firebase"

export const getCollection = async (collectionName: string) => {
    try {
        const querySnapShoot = await getDocs(collection(database, collectionName));
        const data: any = [];
        querySnapShoot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const createCollection = async (collectionName: string, data: Object): Promise<any> => {
    try {
        const docRef = await addDoc(collection(database, collectionName), data);
        return docRef.id;
    } catch (err: any) {
        return Promise.reject(err);
    }
}

export const updateCollection = async (collectionName: string, id: string, data: Object) => {
    try {
        const docRef = doc(database, collectionName, id);
        const response = await setDoc(docRef, data);
        return response
    } catch (err) {
        return Promise.reject(err);
    }
}