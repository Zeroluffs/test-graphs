import PieChart from "components/PieChart";
import { PieChartDataList } from "components/PieChartDataList";
import useChartContext from "context/ChartsContext";
import { useEffect, useState } from "react";
import { dataPie } from "utils/DataPie";

export function LineChart() {
  const { pieChartData } = useChartContext();
  const [chartData, setChartData] = useState({
    labels: pieChartData.map((data: any) => data.label),
    datasets: [
      {
        label: "Users",
        data: pieChartData.map((data: any) => data.value),
        backgroundColor: dataPie.map((data) => data.color),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: dataPie.map((data) => data.label),
      datasets: [
        {
          label: "Users",
          data: dataPie.map((data) => data.value),
          backgroundColor: dataPie.map((data) => data.color),
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [pieChartData]);
  return (
    <div>
      <div className="w-[400px]">
        <PieChart chartData={chartData} />
        <PieChartDataList />
      </div>
    </div>
  );
}
