"use client";

import { useRouter } from "next/navigation";
import { usePocket } from "./pocket-provider";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	//@ts-ignore
	const { user } = usePocket();
	const router = useRouter();

	if (!user) {
		router.push("/login");
	}

	return <>{children}</>;
};

export default AuthProvider;
