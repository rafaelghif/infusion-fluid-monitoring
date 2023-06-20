import { CreateUserType, UpdateUserType } from "../types/user-type";
import { createCollection, getCollection, updateCollection } from "./firebase-service";

export const getUsers = async (): Promise<any> => {
    try {
        const response = await getCollection("users");
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const createUser = async (payload: CreateUserType): Promise<any> => {
    try {
        const response = await createCollection("users", payload);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateUser = async (payload: UpdateUserType): Promise<any> => {
    try {
        const data: UpdateUserType = {
            name: payload.name,
            username: payload.username,
            password: payload.password,
            isAdmin: payload.isAdmin
        }
        const response = await updateCollection("users", payload.id!, data);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}