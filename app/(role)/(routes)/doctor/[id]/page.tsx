const DoctorPage = ({
	params,
}: {
	params: {
		id: string;
	};
}) => {
	console.log(params.id);
	return (
		<div className="flex items-center justify-center w-full h-full">
			DoctorPage
		</div>
	);
};

export default DoctorPage;
