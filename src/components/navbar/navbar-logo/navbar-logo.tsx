import React from "react";
import { Box } from "@mui/material";
import { logo } from "../../../assets/index.ts";
import "./navbar-logo.module.scss";

interface ImageProps {
  alt: string;
}

const NavbarLogo: React.FC<ImageProps> = ({ alt }) => {
  return (
    <Box className="image">
      <img className="logo" alt={alt} src={logo} />
    </Box>
  );
};

export default NavbarLogo;
