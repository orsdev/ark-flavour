import { FC, ChangeEvent } from "react";

export interface SelectProps {
  options: { label: string; value: string }[];
  name: string;
  value: string;
  placeholder_text?: string;
  handleChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export const SelectBox: FC<SelectProps> = ({
  name,
  value,
  handleChange,
  placeholder_text = "Select preference...",
  options = [],
}) => {
  return (
    <div>
      <select
        placeholder={placeholder_text}
        name={name}
        className="text-[1.3rem] bg-white p-[5px] w-full rounded-[30px] h-[45px]"
        onChange={handleChange}
        value={value}
      >
        <option value="">{placeholder_text}</option>
        {options.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
