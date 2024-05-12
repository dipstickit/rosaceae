import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[50%]",
  round: "rounded",
} as const;
const variants = {
  outline: {
    indigo_100: "border-indigo-100 border border-solid text-teal-900",
    gray_500_01: "border-gray-500_01 border border-solid text-gray-900",
    orange_700: "border-orange-700 border border-solid",
  },
  fill: {
    pink_300_01: "bg-pink-300_01",
    deep_orange_A100: "bg-deep_orange-A100",
    green_500: "bg-green-500",
    deep_purple_A100: "bg-deep_purple-A100",
    cyan_50: "bg-cyan-50",
    orange_50: "bg-orange-50",
    green_A100: "bg-green-A100 text-gray-900_09",
    blue_A400: "bg-blue-A400 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-900_04",
    blue_400: "bg-blue-400 text-blue-400",
    indigo_700: "bg-indigo-700 text-white-A700",
    light_blue_500: "bg-light_blue-500 text-white-A700",
    black_900: "bg-black-900 shadow-md text-white-A700",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    teal_200: "bg-teal-200 text-white-A700",
    gray_300_05: "bg-gray-300_05",
    blue_gray_100_02: "bg-blue_gray-100_02 text-black-900",
    gray_900_06: "bg-gray-900_06 text-white-A700",
  },
} as const;

const sizes = {
  xl: "h-[40px] px-[9px] text-sm",
  sm: "h-[29px] px-1.5",
  "9xl": "h-[67px] px-[19px]",
  md: "h-[35px] px-[17px] text-xs",
  lg: "h-[36px] px-[3px]",
  "8xl": "h-[60px] px-[35px] text-lg",
  "2xl": "h-[40px] px-2",
  "7xl": "h-[60px] pl-[21px] pr-[26px] text-[15px]",
  "10xl": "h-[77px] pl-[29px] pr-[34px] text-[31px]",
  "12xl": "h-[83px] px-[35px] text-[32px]",
  "11xl": "h-[80px] px-[35px] text-[28px]",
  xs: "h-[26px] px-7 text-[11px]",
  "6xl": "h-[58px] px-2.5",
  "4xl": "h-[49px] px-[35px] text-lg",
  "3xl": "h-[48px]",
  "5xl": "h-[54px] px-[35px] text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> & {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  shape?: keyof typeof shapes;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  color?: string;
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "gray_900_06",
  ...restProps
}) => {
  return (
    <button
      className={`
        ${className}
        flex
        flex-row
        items-center
        justify-center
        text-center
        cursor-pointer
        ${shape && shapes[shape] ? shapes[shape] : ""}
        ${size && sizes[size] ? sizes[size] : ""}
        ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}
      `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
