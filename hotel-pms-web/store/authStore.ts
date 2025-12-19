import { create } from "zustand";
import type { User } from "@/types/user";

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;

  setUser: (user: User | null) => void;
  setAuthenticated: (value: boolean) => void;
  logoutLocal: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  logoutLocal: () => set({ isAuthenticated: false, user: null }),
}));
