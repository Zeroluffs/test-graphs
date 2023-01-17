// src/components/PieChart.js
import React from "react";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Progamming languages users",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
