import { useEffect, useState } from "react";
import { Data } from "../utils/data";
import PieChart from "components/PieChart";
import { dataPie } from "../utils/DataPie";
import React from "react";
import useChartContext from "context/ChartsContext";
import { InlineEditComponent } from "components/InlineEdit";
export default function Home() {
  const test = {
    id: "test",
    label: "test",
    value: 666,
    color: "hsl(115, 70%, 50%)",
  };
  const { pieChartData, addNewValue } = useChartContext();
  const chartRef = React.useRef<any>(null);
  const [data, setData] = useState(dataPie);
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

  const handleClick = (e: any) => {
    e.preventDefault();
    const chart = chartRef!!.current!!;
    console.log(chart);
    // setData((oldArray) => [...oldArray, test]);
    addNewValue(test);
    dataPie.push(test);
  };

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
    <div className="w-[400px]">
      <InlineEditComponent/>
      <PieChart ref={chartRef} chartData={chartData}  />
    </div>
  );
}
