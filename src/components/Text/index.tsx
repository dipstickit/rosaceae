import React from "react";
const sizes = {
  "5xl": "text-lg font-normal",
  "6xl": "text-[19px] font-medium",
  "7xl": "text-xl font-medium",
  "8xl": "text-[22px] font-normal",
  "2xl": "text-[15px] font-normal",
  "3xl": "text-base font-normal",
  "4xl": "text-[17px] font-medium",
  xs: "text-[8px] font-normal",
  lg: "text-[13px] font-normal",
  s: "text-[10px] font-normal",
  xl: "text-sm font-normal",
  "9xl": "text-2xl font-normal md:text-[22px]",
  "10xl": "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  "11xl": "text-3xl font-light md:text-[28px] sm:text-[26px]",
  md: "text-xs font-normal",
};
export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "3xl",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-gray-50_08 font-jost ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Text };
