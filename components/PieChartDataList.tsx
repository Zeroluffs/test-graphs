import useChartContext from "context/ChartsContext";
import { InlineEditComponent } from "./InlineEdit";

export function PieChartDataList() {
  const { pieChartData, addNewValue } = useChartContext();

  return (
    <div className="flex flex-col w-[1000px] ">
      <div className="flex flex-row text-2xl font-bold gap-80 text-slate-800">
        <h3>Label</h3>
        <h3>Value</h3>
        <h3>Color</h3>
      </div>
      {pieChartData.map((data: any) => {
        return (
          <div
            key={data.id}
            className="flex flex-row gap-12 text-xl font-bold text-center justify-evenly text-slate-800"
          >
            <InlineEditComponent label="label" name={data.label} id={data.id} />
            <InlineEditComponent label="value" name={data.value} id={data.id} />
            <InlineEditComponent label="color" name={data.color} id={data.id} />
          </div>
        );
      })}
    </div>
  );
}
