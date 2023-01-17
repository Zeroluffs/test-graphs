import { PieChartDataList } from "components/PieChartDataList";
import { useState } from "react";
import { LineChartComponent } from "./LineChart";
import { PieChartComponent } from "./PieChart";

export function GraphView() {
  const [showPie, setShowPie] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showBoth, setShowBoth] = useState(true);

  const handleClickBoth = (e: any) => {
    e.preventDefault();
    setShowBoth(true);
    setShowPie(false);
    setShowLine(false);
  };

  const handleClickPie = (e: any) => {
    e.preventDefault();
    setShowBoth(false);
    setShowPie(true);
    setShowLine(false);
  };
  const handleClickLine = (e: any) => {
    e.preventDefault();
    setShowBoth(false);
    setShowPie(false);
    setShowLine(true);
  };

  let ShowGraphs;
  if (showBoth) {
    ShowGraphs = (
      <div className="hidden">
        <div>
          <PieChartComponent />
        </div>
        <div>
          <PieChartDataList />
        </div>
        <div className="w-[400px] ">
          <LineChartComponent />
        </div>
      </div>
    );
  } else {
    if (showLine) {
      ShowGraphs = (
        <div>
          <div className="w-[1000px] m-auto">
            <LineChartComponent />
          </div>
          <div>
            <PieChartDataList />
          </div>
        </div>
      );
    } else {
      if (showPie) {
        ShowGraphs = (
          <div>
            <div className="w-[1000px] m-auto">
              <PieChartComponent />
            </div>

            <div>
              <PieChartDataList />
            </div>
          </div>
        );
      }
    }
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <button
          onClick={handleClickBoth}
          className="rounded-md w-[200px] h-[64px] text-green-600"
        >
          Show Both
        </button>
        <button
          onClick={handleClickPie}
          className="rounded-md w-[200px] h-[64px] text-green-600"
        >
          Show Pie
        </button>
        <button
          onClick={handleClickLine}
          className="rounded-md w-[200px] h-[64px] text-green-600"
        >
          Show Line
        </button>
      </div>
      {ShowGraphs}
    </div>
  );
}
