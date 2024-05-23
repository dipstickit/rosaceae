import React from "react";

const shapes = { round: "rounded-[16px]" } as const;
const variants = {
  outline: {
    gray_500_01: "border-gray-500_01 border border-solid text-gray-900",
    blue_gray_100_06:
      "border-blue_gray-100_06 border border-solid text-blue_gray-300_01",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-700",
  },
  fill: {
    gray_50_07: "bg-gray-50_07",
    white_A700: "bg-white-A700 text-indigo-300_03",
  },
} as const;
const sizes = {
  lg: "h-[60px] pl-[23px] pr-3.5 text-[15px]",
  sm: "h-[56px] px-[15px] text-base",
  "2xl": "h-[81px] px-[33px] text-2xl",
  xl: "h-[80px] pr-8",
  md: "h-[60px] pl-6 pr-[35px] text-lg",
  xs: "h-[49px] pl-5 pr-[35px] text-[15px]",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange" | "value"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: (value: string) => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    value:string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      value,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e.target.value);
    };
    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text  ${(shape && shapes[shape]) || ""
            } ${variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
            ] ||
            variants[variant] ||
            ""
            } ${sizes[size] || ""}`}
        >
          {!!label && label} {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

export { Input };
