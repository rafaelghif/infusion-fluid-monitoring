import { getCollection } from "./firebase-service";

export const getReports = async (): Promise<any> => {
    try {
        const response = await getCollection("reports");
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}