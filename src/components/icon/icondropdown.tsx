import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

const ChevronDownIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  color = "#1E1E1E",
  strokeWidth = 1.5,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83366 8.33333L10.0003 12.5L14.167 8.33333"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
