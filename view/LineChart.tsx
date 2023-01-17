import LineChart from "components/LineChart";
import useChartContext from "context/ChartsContext";
import { useEffect, useState } from "react";

export function LineChartComponent() {
  const { pieChartData } = useChartContext();
  const [chartData, setChartData] = useState({
    labels: pieChartData.map((data: any) => data.label),
    datasets: [
      {
        label: "Users",
        data: pieChartData.map((data: any) => data.value),
        backgroundColor: pieChartData.map((data: any) => data.color),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
    setChartData({
      labels: pieChartData.map((data: any) => data.label),
      datasets: [
        {
          label: "Users",
          data: pieChartData.map((data: any) => data.value),
          backgroundColor: pieChartData.map((data: any) => data.color),
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [pieChartData]);
  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
}
