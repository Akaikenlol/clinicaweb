import { CalendarChart } from "./components/CalendarChart";
import { PieChart } from "./components/PieChart";

const DoctorPage = () => {
	return (
		<div className="grid grid-cols-2 w-full h-full p-5 gap-5 bg-neutral-100 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-rounded-lg">
			<div className="h-[300px] border bg-white p-2">
				<CalendarChart />
			</div>
			<div className="h-[300px] border bg-white p-2">
				<PieChart />
			</div>
			<div className="h-[1000px] w-full col-span-2 bg-white"></div>
		</div>
	);
};

export default DoctorPage;
