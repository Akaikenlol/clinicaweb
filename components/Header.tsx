"use client";

import { pb } from "@/helper";
import { usePocket } from "@/providers/pocket-provider";
import { UsersRecord, UsersResponse } from "@/types/pocketbase-types";
import Image from "next/image";
import React from "react";

const Header = () => {
	//@ts-ignore
	const { user } = usePocket();
	const role = user?.expand?.role.name;
	const url = pb.files.getUrl(user, user?.avatar);

	return (
		<div className="flex items-center justify-between w-full px-5 py-2 border-b">
			<h2 className="">{role} Dashboard</h2>

			<div className="flex items-center gap-5">
				<div className="outline-2 outline outline-offset-2 outline-primary rounded-full w-[50px] h-[50px] relative overflow-hidden">
					<Image className="object-cover " src={url} alt="Profile" fill />
				</div>
			</div>
		</div>
	);
};

export default Header;
