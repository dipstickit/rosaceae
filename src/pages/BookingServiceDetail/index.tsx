import { Helmet } from "react-helmet";
import { Button, Heading, Img, SelectBox } from "../../components";
import DateBooking from "../../components/DateBooking";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SpaLocation } from "../../types/spaLocation.type";
import BookingSalon from "../BookingSalon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

interface ServiceItem {
  itemId: number;
  itemName: string;
  // Add other properties as needed
}

const dateBookingData = [
  { time: "13:20" },
  { time: "13:30" },
  { time: "14:00" },
];

export default function BookingServiceDetailPage() {
  const navigate = useNavigate();
  const [receivedData, setReceivedData] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemNames, setItemNames] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    const fetchItemTypes = async () => {
      try {
        const response = await fetch(
          "https://be27-113-22-107-62.ngrok-free.app/api/v1/shop/3?itemType=D%E1%BB%8Bch%20V%E1%BB%A5"
        );
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const serviceItems: ServiceItem[] = data.items.content;
        const names: string[] = serviceItems.map((item) => item.itemName);
        setItemNames(names);
      } catch (error) {
        console.error("Error fetching item types:", error);
      }
    };

    fetchItemTypes();
  }, []);

  const handleButtonClick = () => {
    navigate("/bookingsalon");
  };

  const handleReceiveData = (spa: SpaLocation) => {
    setReceivedData(spa.accountName);
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header />
        <div className="flex flex-col items-center">
          <div className="container-xs mt-[133px] md:p-5">
            <div className="flex flex-col">
              <Heading
                size="12xl"
                as="h1"
                className="!font-bevietnam11 !text-black-900 text-center "
              >
                Đặt lịch giữ chỗ
              </Heading>
            </div>
          </div>
          <button
            className="container-xs mt-[27px] border border-solid border-gray-500 font-bevietnam11 font-bold md:p-5 sm:px-5 sm:pt-5 rounded-lg"
            onClick={handleButtonClick}
          >
            <img
              src="images/img_iconhomeunselected.svg"
              alt="icon_home_unselected"
              className="h-[20px] w-[22px] mr-2 mt-2"
              style={{ alignSelf: "center" }}
            />
            <Heading className="text-left opacity-50 ml-8 mb-4" size="md">
              {searchParams.get("spa") !== null ? (
                searchParams.get("spa")
              ) : receivedData ? (
                <BookingSalon onSelectSpa={handleReceiveData} />
              ) : (
                "Chọn Spa"
              )}
            </Heading>
          </button>
          <SelectBox
            className="container-xs mt-[27px] border border-solid border-gray-500 font-bevietnam11 font-bold md:p-5 sm:px-5 sm:pt-5"
            shape="round"
            indicator={
              <Img
                src="images/img_arrowdown_black_900.svg"
                alt="arrow_down"
                className="h-[10px] w-[20px]"
              />
            }
            name="chndchv"
            placeholder={`Chọn Dịch Vụ`}
            options={itemNames.map((name) => ({ label: name, value: name }))}
          />
          <div className="container-xs rounded-[10px] pb-[15px] mt-[27px] flex justify-center border border-solid border-gray-500 bg-gray-100_04 px-3.5 pt-3.5 md:p-5">
            <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
              <div className="gap-[15px] flex items-center self-end">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Ngày"
                    format="MM/DD/YYYY"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </LocalizationProvider>
                <TextField
                  value={selectedDate ? selectedDate.format("MM/DD/YYYY") : ""}
                  onChange={(e) => {
                    const newDate = dayjs(e.target.value, "MM/DD/YYYY");
                    setSelectedDate(newDate.isValid() ? newDate : null);
                  }}
                />
              </div>
              <div className="flex items-center gap-5">
                <Button
                  color="green_A100"
                  size="md"
                  shape="round"
                  className="!rounded-[5px] min-w-[110px] font-bevietnam11"
                >
                  Ngày thường
                </Button>
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                  className="h-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="container-xs pr-[9px] pb-[50px] mt-[27px] flex justify-center md:p-5 md:pb-5">
            <div className="flex w-full flex-col gap-5">
              <div className="gap-[15px] flex flex-wrap">
                {dateBookingData.map((item, index) => (
                  <DateBooking
                    key={"makeupservice17" + index}
                    className="gap-[34px] items-center md:w-full"
                    {...item}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="container-xs pr-[459px] pl-[395px] mt-[46px] md:p-5 md:px-5">
            <Button
              color="blue_gray_100_02"
              size="8xl"
              className="rounded-[10px] w-full font-extrabold sm:px-5 mb-[2rem]"
            >
              HOÀN TẤT
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
