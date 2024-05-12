import SwitchProvider from "@dhiwise/react-switch";
import React from "react";
const sizes = { xs: { width: 60, height: 30 } } as const;
type SwitchProps = Partial<{
  value: string | boolean;
  className: string;
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
  onChange: (val: string | boolean) => void; // Replace Function with a more specific function type
  size: keyof typeof sizes;
}>;
const Switch: React.FC<SwitchProps> = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val: string | boolean) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      {" "}
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />{" "}
    </div>
  );
};
export { Switch };
