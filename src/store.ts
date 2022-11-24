import create from "zustand";

const useStore = create((set) => ({
  users: [
    {
      id: 1,
      email: "Yerjan@pm.me",
      password: "uhoihjaeo",
    },
  ],
  addNewUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));

export default useStore;
