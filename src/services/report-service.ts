import { CreateReportType } from "../types/report-type";
import { createCollection, getCollection } from "./firebase-service";

export const getReports = async (): Promise<any> => {
    try {
        const response = await getCollection("reports");
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const createReport = async (payload: CreateReportType): Promise<any> => {
    try {
        const response = await createCollection("reports", payload);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}