import { create } from "zustand";
import { persist } from "zustand/middleware"

interface LoadingState {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
}

const initialLoading: boolean = false;

const useLoadingStore = create<LoadingState>()(
    persist((set) => ({
        isLoading: initialLoading,
        setLoading: (isLoading) => set({ isLoading }),
    }), { name: "loading" })
);

export default useLoadingStore;