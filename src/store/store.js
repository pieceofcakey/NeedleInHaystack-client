import { create } from "zustand";

const useUserInputStore = create((set) => ({
  userInput: "",
  setUserInput: (userInput) => set({ userInput }),
}));

const useCheckSpellStore = create((set) => ({
  shouldCheckSpell: true,
  setShouldCheckSpell: (shouldCheckSpell) => set({ shouldCheckSpell }),
}));

const useUserStore = create((set) => ({
  isLoggedIn: false,
  user: {},
  setIsLoggedIn: (isLoggedIn) =>
    set({
      isLoggedIn,
    }),
  setUser: (user) => set({ user }),
}));

const useHeaderStateStore = create((set) => ({
  headerState: "MainPage",
  setHeaderState: (headerState) => set({ headerState }),
}));

export {
  useUserInputStore,
  useCheckSpellStore,
  useUserStore,
  useHeaderStateStore,
};
