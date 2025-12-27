import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const Chart = ({ratings}) => {
  const sortedRatings = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="w-full h-[300px]">
      <h2 className="font-semibold text-xl  mb-4 ml-10">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedRatings}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="name"
            width={70}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            formatter={(value) => value.toLocaleString()}
          />

          <Bar
            dataKey="count"
            fill="#ff8c1a"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );


 
};

export default Chart;