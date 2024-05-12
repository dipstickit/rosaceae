import React from "react";
import Select, { Props } from "react-select";

const shapes = { round: "rounded-[10px]", square: "rounded-[0px]" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-300_03",
    gray_100_04: "bg-gray-100_04 text-gray-900",
  },
} as const;
const sizes = {
  lg: "h-[49px] pl-5 pr-[35px] text-[15px]",
  sm: "h-[33px] pl-[18px] pr-[33px] text-base",
  xs: "h-[29px] pl-[27px] pr-[35px] text-base",
  md: "h-[46px] pr-[35px] text-sm",
  xl: "h-[64px] px-[35px] text-[17px]",
} as const;

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: keyof (typeof variants)[keyof typeof variants];
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xl",
      color = "gray_100_04",
      ...restProps
    },
    ref
  ) => {
    const shapeClass = shape ? shapes[shape] || "" : "";
    const sizeClass = size ? sizes[size] || "" : "";
    const variantClass =
      (variant &&
        variants[variant]?.[
          color as keyof (typeof variants)[typeof variant]
        ]) ||
      "";

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shapeClass} ${sizeClass} ${variantClass}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({ ...provided, zIndex: 0 }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": { border: "0 !important" },
            }),
            input: (provided) => ({ ...provided, color: "inherit" }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#000000" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": { backgroundColor: "#000000", color: "#ffffff" },
            }),
            valueContainer: (provided) => ({ ...provided, padding: 0 }),
            placeholder: (provided) => ({ ...provided, margin: 0 }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
export { SelectBox };
