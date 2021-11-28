import { FilterKeys } from "app/shared/model/filters/Filters";
import { FunctionComponent, useState } from "react";

interface RangeProps {
  label: string;
  id: FilterKeys;
  initial: number;
  onChange: (key: FilterKeys, value: number) => void;
  range: {
    min: number;
    max: number;
  };
}

const Range: FunctionComponent<RangeProps> = (props: RangeProps) => {
  const [value, setValue] = useState(props.initial);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value;
    setValue(newValue);
    props.onChange(props.id, newValue);
  };

  return (
    <div className="flex flex-col items-center p-4 text-xl space-y-2 w-full">
      <label>{props.label}: {value}</label>
      <input
        value={value}
        min={props.range.min}
        max={props.range.max}
        type="range"
        className="w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default Range;
