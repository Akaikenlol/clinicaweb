import React, { useEffect, useState } from "react";

export const MountProvider = ({ children }: { children: React.ReactNode }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <>{children}</>;
};
