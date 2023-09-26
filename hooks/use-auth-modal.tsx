import { create } from "zustand";

interface UseAuthModalStore {
	isLogIn: boolean;
	setIsLogIn: () => void;
	setIsNotLogIn: () => void;
}

interface UseRoleModalStore {
	role: string;
	setRole: (role: string) => void;
}

export const useAuthModal = create<UseAuthModalStore>((set) => ({
	isLogIn: false,
	setIsLogIn: () => set({ isLogIn: true }),
	setIsNotLogIn: () => set({ isLogIn: false }),
}));

export const useRoleModal = create<UseRoleModalStore>((set) => ({
	role: "",
	setRole: (role) => set(() => ({ role: role })),
}));
