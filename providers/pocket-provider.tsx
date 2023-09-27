"use client";

import {
	createContext,
	useContext,
	useCallback,
	useState,
	useEffect,
	useMemo,
} from "react";
import PocketBase from "pocketbase";
import { useInterval } from "usehooks-ts";

import jwtDecode from "jwt-decode";
import ms from "ms";
import { UsersResponse } from "@/types/pocketbase-types";

const BASE_URL = "http://127.0.0.1:8090";
const fiveMinutesInMs = ms("5 minutes");
const twoMinutesInMs = ms("2 minutes");

// interface PocketContextType {
// 	signup: (email: string, password: string) => void;
// 	login: (email: string, password: string) => void;
// 	logout: () => void;
// 	user: UsersResponse;
// 	token: string | null;
// 	pb: PocketBase;
// }

const PocketContext = createContext({});

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
	const pb = useMemo(() => new PocketBase(BASE_URL), []);

	const [token, setToken] = useState(pb.authStore.token);
	const [user, setUser] = useState(pb.authStore.model);

	useEffect(() => {
		return pb.authStore.onChange((token, model) => {
			setToken(token);
			setUser(model);
		});
	}, []);

	const signup = useCallback(async (email: string, password: string) => {
		return await pb
			.collection("users")
			.create({ email, password, passwordConfirm: password });
	}, []);

	const login = useCallback(
		async (email: string, password: string, expand: string[] | string) => {
			return await pb
				.collection("users")
				.authWithPassword(email, password, { expand: expand });
		},
		[]
	);

	const logout = useCallback(() => {
		pb.authStore.clear();
	}, []);

	const refreshSession = useCallback(async () => {
		if (!pb.authStore.isValid) return;
		const decoded = jwtDecode(token);
		//@ts-ignore
		const tokenExpiration = decoded.exp;
		//@ts-ignore
		const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;
		if (tokenExpiration < expirationWithBuffer) {
			await pb.collection("users").authRefresh();
		}
	}, [token]);

	useInterval(refreshSession, token ? twoMinutesInMs : null);

	return (
		<PocketContext.Provider value={{ signup, login, logout, user, token, pb }}>
			{children}
		</PocketContext.Provider>
	);
};

export const usePocket = () => useContext(PocketContext);
