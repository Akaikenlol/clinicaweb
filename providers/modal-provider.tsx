"use client";

import AlertModal from "@/components/modal/alert-modal";
import { createContext, useContext, useState } from "react";
import { usePocket } from "./pocket-provider";

const ModalContext = createContext({});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	//@ts-ignore
	const { logout } = usePocket();

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			<AlertModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onConfirm={async () => {
					setLoading(true);
					logout();
					setLoading(false);
				}}
				loading={loading}
			/>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

export const useModal = () => useContext(ModalContext);
