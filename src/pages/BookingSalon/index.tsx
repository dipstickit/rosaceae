import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import { Footer, Header } from "../../components";
import spaService from "../../api/booking.api";
import { SpaLocation } from "../../types/spaLocation.type";
import { useNavigate } from "react-router-dom";
import CustomLoading from "../../components/CustomLoading";

export default function BookingSalon({ onSelectSpa }: any) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [spas, setSpas] = useState<SpaLocation[]>([]);
  const [filteredSpas, setFilteredSpas] = useState<SpaLocation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showSpas, setShowSpas] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpas = async () => {
      try {
        const response = await spaService.getAllLocation();
        if (response && response.data) {
          const data: any = response.data;
          setSpas(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch spas data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching spas data:", error);
        setLoading(false);
      }
    };

    fetchSpas();
  }, []);

  const fetchSpaLocation = async () => {
    try {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await spaService.getLocationNearBy(
            latitude,
            longitude
          );

          if (response && response.data) {
            const data: any = response.data;
            setSpas(data);
            setFilteredSpas(data);
            setShowSpas(true);
          } else {
            console.error("Failed to fetch spas data");
          }
          setLoading(false);
        },
        (error) => {
          console.error("Error getting current position:", error);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Error fetching spas data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = spas.filter((spa) =>
        spa.accountName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSpas(filtered);
      setShowSpas(true);
    } else {
      setFilteredSpas(spas);
    }
  }, [searchTerm, spas]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleSelectSpa = (spa: SpaLocation) => {
    console.log("Selected spa:", spa);
    navigate(`/booking?spa=${spa.accountName}&sid=${spa.usersID}`);
  };

  const handleFindNearbySpas = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await fetchSpaLocation();
    setSearchTerm("");
  };

  if (loading) {
    return <CustomLoading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex-grow flex flex-col items-center">
        <Box className="bg-white p-8 rounded-lg shadow-lg mb-8 w-full">
          <Typography variant="h4" className="mb-9 font-bold text-center">
            Chọn Spa
          </Typography>
          <Box className="mb-4">
            <TextField
              fullWidth
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Tìm kiếm..."
              variant="outlined"
              className="mb-4"
              InputProps={{
                sx: { borderRadius: 5 },
              }}
            />
          </Box>
          <Box className="mb-4 flex space-x-4 justify-center">
            <Button
              onClick={handleFindNearbySpas}
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-600"
              sx={{
                borderRadius: 2,
                backgroundColor: "#43a047",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Tìm Spa gần đây
            </Button>
          </Box>
        </Box>

        {showSpas && (
          <Box
            className="grid gap-4 w-full"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 4,
              justifyItems: "center",
            }}
          >
            {filteredSpas.slice(0, 40).map((spa) => (
              <Card
                key={spa.locationID}
                className="overflow-hidden flex flex-col justify-between"
                sx={{ width: "100%", maxWidth: "260px", minHeight: "350px" }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={spa.coverImages}
                  alt={spa.accountName}
                  onClick={() => handleSelectSpa(spa)}
                  style={{ cursor: "pointer" }}
                />
                <CardContent
                  className="p-2 flex-grow flex flex-col justify-between"
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Box>
                    <Typography gutterBottom variant="h6" component="div">
                      {spa.accountName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="truncate-2-lines"
                    >
                      {spa.address}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="mt-1"
                    >
                      {spa.phone}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    href={spa.locationUrl}
                    target="_blank"
                    className="mt-2"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Xem trên bản đồ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
      <Footer />
    </div>
  );
}
