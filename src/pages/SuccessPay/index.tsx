import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Container, CircularProgress } from "@mui/material";

const SuccessPay: React.FC = () => {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        "https://joint-socially-pipefish.ngrok-free.app/api/v1/payOS/success"
      )
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        setTimeout(() => {
          navigate("/order");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [navigate]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h2" gutterBottom>
        Redirected Page
      </Typography>
      {responseData ? (
        <div>
          <Typography variant="body1">Status: {responseData.status}</Typography>
          <Typography variant="body1">
            Message: <a href={responseData.message}>{responseData.message}</a>
          </Typography>
        </div>
      ) : (
        <CircularProgress style={{ marginTop: "20px" }} />
      )}
    </Container>
  );
};

export default SuccessPay;
