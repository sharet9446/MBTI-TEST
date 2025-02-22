import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useBearStore = create(
  persist(
    immer((set) => ({
      isAuthenticated: false,
      token: "",
      currentNickName: "",

      setIsAuthenticated: (value) =>
        set((state) => {
          state.isAuthenticated = value;
        }),

      setUserData: (value) =>
        set((state) => {
          state.token = value;
        }),

      setCurrentNickName: (value) =>
        set((state) => {
          state.currentNickName = value;
        }),
    })),
    { name: "Token", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useBearStore;
