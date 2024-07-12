import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import clsx from "clsx";
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "0 20px",
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#f3f4f6",
});

const useStyles = {
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "600px",
    textAlign: "center",
    marginBottom: "20px",
  },
  underDevelopment: {
    fontSize: "1.2rem",
    fontStyle: "italic",
  },
};

const Blog: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg" className={clsx("bg-gray-100")}>
      <header className="py-4">
        <Typography variant="h1" sx={useStyles.heading}>
          Rosaceae Platform
        </Typography>
      </header>
      <main className="content">
        <Typography variant="h2" sx={useStyles.underDevelopment}>
          Trang này đang trong quá trình phát triển.
        </Typography>
      </main>
      <Link to="/" className="mt-2 text-gray-900 hover:underline">
        Click vào đây để quay lại trang chủ
      </Link>
      <footer className="py-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Rosaceae Platform. All rights
        reserved.
      </footer>
    </StyledContainer>
  );
};

export default Blog;
