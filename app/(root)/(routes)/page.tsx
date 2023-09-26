"use client";

import { useAuthModal } from "@/hooks/use-auth-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SetupPage() {
	const setIsLogIn = useAuthModal((state) => state.setIsLogIn);
	const isLogIn = useAuthModal((state) => state.isLogIn);
	const router = useRouter();
	const [role, setRole] = useState("doctor");

	useEffect(() => {
		if (isLogIn) {
			if (role === "doctor") {
				router.push("/doctor/1");
			} else if (role === "nurse") {
				router.push("/nurse/1");
			}
		} else {
			router.push("/signup");
		}
	}, [setIsLogIn, isLogIn]);

	return null;
}
