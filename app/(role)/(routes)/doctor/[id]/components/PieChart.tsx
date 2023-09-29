"use client";

// import { ResponsivePie } from "@nivo/pie";
import { pieData } from "./data";
import dynamic from "next/dynamic";

const ResponsivePie = dynamic(
	() => import("@nivo/pie").then((m) => m.ResponsivePie),
	{ ssr: false }
);

export const PieChart = () => {
	return (
		<ResponsivePie
			data={pieData}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			colors={{ scheme: "purples" }}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 100,
					itemHeight: 18,
					itemTextColor: "#999",
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000",
							},
						},
					],
				},
			]}
		/>
	);
};
