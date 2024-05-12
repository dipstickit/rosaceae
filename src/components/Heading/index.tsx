import React from "react";
const sizes = {
  "3xl": "text-2xl font-bold md:text-[22px]",
  "2xl": "text-xl font-bold",
  "5xl": "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "4xl": "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  "7xl": "text-[35px] font-semibold md:text-[33px] sm:text-[31px]",
  "6xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "9xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "8xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  "15xl": "text-[84px] font-bold md:text-5xl",
  "14xl": "text-[64px] font-semibold md:text-5xl",
  "13xl": "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
  xl: "text-lg font-bold",
  md: "text-[15px] font-semibold",
  s: "text-sm font-bold",
  "12xl": "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
  xs: "text-xs font-semibold",
  lg: "text-[17px] font-bold",
  "11xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  "10xl": "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
};
export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900 font-oldstandardtt ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Heading };
