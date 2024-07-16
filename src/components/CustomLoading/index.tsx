import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const CustomLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Đang tải...
      </Typography>
    </Box>
  );
};

export default CustomLoading;
