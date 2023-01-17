import { useState } from 'react';

const InlineEdit = ({ value, setValue }:any) => {
  const [editingValue, setEditingValue] = useState(value);
  
  const onChange = (event:any) => setEditingValue(event.target.value);
  
  const onKeyDown = (event:any) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }
  
  const onBlur = (event:any) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value)
    }
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export const InlineEditComponent = () => {
  const [value, setValue] = useState("Hello");

  return <InlineEdit value={value} setValue={setValue} />;
};