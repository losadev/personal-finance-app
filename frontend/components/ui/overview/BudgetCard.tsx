"use client";
import React from "react";
import MiniStatCard from "./MiniStatCard";
import ButtonTerciary from "../ButtonTerciary";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const BudgetCard = () => {
  return (
    <section className="bg-[var(--color-white-app)] py-6 px-5 md:p-8 rounded-lg space-y-5 lg:row-start-1 lg:col-start-2">
      <div className="flex justify-between items-center">
        <h1 className="text-preset-2">Budgets</h1>
        <ButtonTerciary text="View all" />
      </div>
      <div className="md:flex">
        {/* PIECHART */}
        <div className="flex justify-center md:flex-1">
          <PieChart width={200} height={200} className=" flex justify-center">
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        {/* STATS */}
        <div className="grid grid-rows-2 grid-cols-2 gap-4 md:grid-rows-4 md:grid-cols-1">
          <MiniStatCard
            amount="$150"
            color="text-[var(--color-green-app)]"
            title="Entetainment"
          />
          <MiniStatCard
            amount="$50"
            color="text-[var(--color-blue-app)]"
            title="Bills"
          />
          <MiniStatCard
            amount="$30"
            color="text-[var(--color-navy-app)]"
            title="Dinning out"
          />
          <MiniStatCard
            amount="$400"
            color="text-[var(--color-red-app)]"
            title="Personal care"
          />
        </div>
      </div>
    </section>
  );
};

export default BudgetCard;
