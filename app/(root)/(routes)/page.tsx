"use client";

import { useAuthModal } from "@/hooks/use-auth-modal";
import { usePocket } from "@/providers/pocket-provider";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SetupPage() {
	//@ts-ignore
	const { user } = usePocket();

	const router = useRouter();

	if (!user) {
		redirect("/login");
	} else {
		router.push(`/${user.expand.role.role}/${user.id}`);
	}

	return <></>;
}
