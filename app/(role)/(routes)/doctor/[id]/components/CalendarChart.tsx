"use client";

// import { ResponsiveTimeRange } from "@nivo/calendar";
import { data } from "./data";
import { format, subMonths } from "date-fns";
import dynamic from "next/dynamic";

const ResponsiveTimeRange = dynamic(
	() => import("@nivo/calendar").then((m) => m.ResponsiveTimeRange),
	{ ssr: false }
);

export const CalendarChart = () => {
	const today = format(new Date(), "yyyy-MM-dd");
	const lastSixMonth = format(subMonths(new Date(), 6), "yyyy-MM-dd");

	console.log(today, lastSixMonth);

	return (
		<ResponsiveTimeRange
			data={data}
			from={lastSixMonth}
			to={today}
			emptyColor="#eeeeee"
			colors={["#e4e5f0", "#cdcde5", "#b2b1d4", "#9e9ac7"]}
			margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
			dayBorderWidth={2}
			dayBorderColor="#ffffff"
			legends={[
				{
					anchor: "bottom-right",
					direction: "row",
					justify: false,
					itemCount: 4,
					itemWidth: 42,
					itemHeight: 36,
					itemsSpacing: 14,
					itemDirection: "left-to-right",
					translateX: -60,
					translateY: -60,
					symbolSize: 20,
				},
			]}
		/>
	);
};
