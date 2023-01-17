import PieChart from "components/PieChart";
import { PieChartDataList } from "components/PieChartDataList";
import useChartContext from "context/ChartsContext";
import { useEffect, useState } from "react";

export function PieChartComponent() {
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
      <PieChart chartData={chartData} />
      <PieChartDataList />
    </div>
  );
}
