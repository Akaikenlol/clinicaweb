import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ModalProvider from "@/providers/modal-provider";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModalProvider>
			<div className="flex w-full h-screen ">
				<NavBar />
				<div className="flex flex-col w-full">
					<Header />
					{children}
				</div>
			</div>
		</ModalProvider>
	);
};

export default layout;
