import useChartContext from "context/ChartsContext";
import { useState } from "react";

const InlineEdit = ({ value, setValue, id, label }: any) => {
  const [editingValue, setEditingValue] = useState(value);
  const { addNewValue } = useChartContext();

  const onChange = (event: any) => setEditingValue(event.target.value);

  const onKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event: any) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      const object = {
        id: id,
        label: label,
        value: event.target.value,
      };
      addNewValue(object);
      setValue(event.target.value);
    }
  };

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className="bg-slate-300"
    />
  );
};

export const InlineEditComponent = ({ name, label, id }: any) => {
  const [value, setValue] = useState(name);

  return <InlineEdit label={label} id={id} value={value} setValue={setValue} />;
};
