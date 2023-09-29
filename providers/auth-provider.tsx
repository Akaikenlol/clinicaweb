"use client";

import { useRouter } from "next/navigation";
import { usePocket } from "./pocket-provider";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	//@ts-ignore
	const { user } = usePocket();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);

	return <>{children}</>;
};

export default AuthProvider;
