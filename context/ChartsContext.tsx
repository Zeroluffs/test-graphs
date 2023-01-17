import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { dataPie } from "utils/DataPie";
interface ChartsContextProps {
  children: ReactNode;
}
interface ContextProps {
  pieChartData: any;
  addNewValue: (value: any) => void;
}
const ChartContext = createContext<ContextProps>({
  pieChartData: [],
  addNewValue: (value: any) => {},
});

export function ChartContextProvider({ children }: ChartsContextProps) {
  const [pieChartData, setDataPieChart] = useState(dataPie);
  const memoedValue = useMemo(
    () => ({
      pieChartData,
      addNewValue,
    }),
    [pieChartData, addNewValue]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function addNewValue(value: any) {
    console.log("addNewValue", value);
    const findObj = pieChartData.findIndex((obj: any) => obj.id === value.id);
    const newState = [...pieChartData];
    newState[findObj][value.label] = value.value;
    setDataPieChart(newState);
  }

  return (
    <ChartContext.Provider value={memoedValue}>
      {children}
    </ChartContext.Provider>
  );
}

export default function useChartContext() {
  return useContext(ChartContext);
}
