import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import styles from "./ComButton.module.scss";

interface ComButtonProps extends ButtonProps {
  endIcon?: React.ReactNode;
}

const ComButton = React.forwardRef<HTMLButtonElement, ComButtonProps>(
  (
    { endIcon, className = "", onClick, children, color = "primary", ...props },
    ref
  ) => {
    return (
      <>
        <Button
          ref={ref}
          variant="contained"
          size="large"
          color={color}
          className={`${styles["com-button"]} ${className}`} /* Use styles from ComButton.scss */
          {...props}
          onClick={endIcon ? undefined : onClick}
        >
          {children}
        </Button>
      </>
    );
  }
);

export default ComButton;
