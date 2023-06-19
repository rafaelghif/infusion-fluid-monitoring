export interface UserInterface {
    id: string;
    name: string;
    username: string;
    password: string;
    isAdmin: boolean;
}

export type CreateUserType = Pick<UserInterface, "name" | "username" | "password" | "isAdmin">;
export type UpdateUserType = Partial<UserInterface>;