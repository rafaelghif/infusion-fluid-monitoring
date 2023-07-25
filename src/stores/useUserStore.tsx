import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInterface } from "../types/user-type";

interface UserState {
    user: UserInterface;
    setUser: (state: UserInterface) => void;
    clearUser: () => void;
}

const initialUser: UserInterface = {
    id: "",
    name: "",
    username: "",
    password: "",
    isAdmin: false,
    isNurse: false
}

const useUserStore = create<UserState>()(
    persist((set) => ({
        user: initialUser,
        setUser: (user) => set({ user: user }),
        clearUser: () => set({ user: initialUser })
    }), { name: "User" })
);

export default useUserStore;