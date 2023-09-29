"use client";

import { pb } from "@/helper";
import { MountProvider } from "@/providers/mount-provider";
import { usePocket } from "@/providers/pocket-provider";
import Image from "next/image";

const Header = () => {
	//@ts-ignore
	const { user } = usePocket();
	const url = pb.files.getUrl(user, user?.avatar);

	return (
		<MountProvider>
			<div className="flex items-center justify-between w-full px-5 py-2 border-b">
				<p className="text-lg font-bold">{user?.name}</p>

				<div className="flex items-center gap-5">
					<div className="outline-2 outline outline-offset-2 outline-primary rounded-full w-[50px] h-[50px] relative overflow-hidden">
						<Image className="object-cover " src={url} alt="Profile" fill />
					</div>
				</div>
			</div>
		</MountProvider>
	);
};

export default Header;
