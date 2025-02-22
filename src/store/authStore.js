import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => ({
      isAuthenticated: false,
      userData: null,

      isLogin: (userData) =>
        set((state) => {
          state.isAuthenticated = true;
          state.userData = userData;
        }),

      isLogout: () =>
        set((state) => {
          state.isAuthenticated = false;
          state.userData = null;
        }),

      updateNickName: (nickname) =>
        set((state) => {
          state.userData.nickname = nickname;
        }),
    })),
    { name: "Token", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useAuthStore;
