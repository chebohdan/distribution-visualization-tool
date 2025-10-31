import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartDetails, RechartData } from "../../types";

interface RechartCardProps {
  chartDetails: ChartDetails;
}

function BarChartCard({ chartDetails }: RechartCardProps) {
  // Trim Labels
  const tickFormatter = (value: string) => {
    const limit = 20;
    if (value.length < limit) return value;
    return `${value.substring(0, limit)}...`;
  };

  // Calculate vertical offset for X-Axis labels based on label length
  const calcDy = (data: RechartData[]) => {
    let maxLength = 0;
    data.forEach((item) => {
      maxLength = Math.max(item.name.length, maxLength);
    });
    const baseDy = 15;
    const extraHeightPerChar = 2;
    return baseDy + maxLength * extraHeightPerChar;
  };

  return (
    <div className="w-full max-w-3xl bg-gray-800">
      <h2 className="font-medium p-3 text-xl">{chartDetails.title}</h2>
      <div className="p-4 ">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            responsive
            data={chartDetails.data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 160,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tickFormatter={tickFormatter}
              angle={-90}
              dy={calcDy(chartDetails.data)}
              interval={0}
            />
            <YAxis width="auto" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "6px",
              }}
            />
            <Bar
              dataKey={"value"}
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartCard;
