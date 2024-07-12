import { Helmet } from "react-helmet";
import { Button, Heading, Img, SelectBox } from "../../components";
import DateBooking from "../../components/DateBooking";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { SpaLocation } from "../../types/spaLocation.type";
import BookingSalon from "../BookingSalon";
import bookingApi from "../../api/booking.api";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { useSelector } from "react-redux";
import instance from "../../api/axiosCustomize";
import { toast } from "react-toastify";

interface ServiceItem {
  itemId: number;
  itemName: string;
  // Add other properties as needed
}

interface BookingInfo {
  email: string;
  itemId: number;
  datetime: number;
  timeBookingId: number;
}

export default function BookingServiceDetailPage() {
  const navigate = useNavigate();
  const [receivedData, setReceivedData] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemNames, setItemNames] = useState<ServiceItem[]>([]);
  const [dateBookingData, setDateBookingData] = useState<any>({ data: [] });
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const userInformation = useSelector((state: any) => state.userInfo.userInfo);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const storedAccessToken = localStorage.getItem("access-token");
      const storedUserInfo = localStorage.getItem("user-info");

      if (!storedAccessToken || !storedUserInfo) {
        if (!toastShown) {
          toast.error("Bạn cần đăng nhập để truy cập vào trang này.", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setToastShown(true);
        }
        navigate("/login");
      }
    };

    checkAuth();

    // Kiểm tra lại mỗi khi trang được tải lại
    window.addEventListener("load", checkAuth);

    return () => {
      window.removeEventListener("load", checkAuth);
    };
  }, [toastShown, navigate]);

  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    email: userInformation?.email || "",
    itemId: 0,
    datetime: 0,
    timeBookingId: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dateBookingData = await bookingApi.getTimeBooking();
        setDateBookingData(dateBookingData);
      } catch (error) {
        console.error("Error fetching time booking:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchParams.get("sid") !== null) {
      const fetchItemTypes = async () => {
        try {
          const response = await instance.get(
            `shop/${searchParams.get("sid")}?itemType=D%E1%BB%8Bch%20V%E1%BB%A5`
          );
          const data = response.data;
          const serviceItems: ServiceItem[] = data.items.content;
          const names: ServiceItem[] = serviceItems.map((item) => ({
            itemId: item.itemId,
            itemName: item.itemName,
          }));
          setItemNames(names);
        } catch (error) {
          console.error("Error fetching item types:", error);
        }
      };
      fetchItemTypes();
    }
  }, [searchParams]);

  const handleButtonClick = () => {
    navigate("/bookingsalon");
  };

  const handleReceiveData = (spa: SpaLocation) => {
    setReceivedData(spa.accountName);
  };

  const handleSelect = (e: any) => {
    updateBookingInfo({ itemId: e.value });
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    updateBookingInfo({
      datetime: newValue?.toDate().getTime() || 0,
    });
    toast.success("Đã chọn thời gian thành công!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const updateBookingInfo = (newInfo: Partial<BookingInfo>) => {
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      ...newInfo,
    }));
  };

  const submit = async () => {
    try {
      const res = await bookingApi.createBooking(bookingInfo);
      toast.success("Đặt lịch thành công!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/viewbooking");
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Đã xảy ra lỗi khi đặt lịch. Vui lòng thử lại sau.", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
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
            options={
              itemNames
                ? itemNames.map((item) => ({
                    label: item.itemName,
                    value: item.itemId,
                  }))
                : null
            }
            onChange={handleSelect}
          />
          <div className="container-xs rounded-[10px] pb-[15px] mt-[27px] flex justify-center border border-solid border-gray-500 bg-gray-100_04 px-3.5 pt-3.5 md:p-5">
            <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
              <div
                className="gap-[15px] flex items-center self-end"
                style={{ width: "100%" }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Ngày"
                    format="MM/DD/YYYY"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="container-xs pr-[9px] pb-[50px] mt-[27px] flex justify-center md:p-5 md:pb-5">
            <div className="flex w-full flex-col gap-5">
              <div className="gap-[15px] flex flex-wrap">
                {dateBookingData.data.map((item: any, index: number) => (
                  <DateBooking
                    key={item.timeID}
                    className="gap-[34px] items-center md:w-full"
                    time={item.time}
                    clickEvent={() => {
                      updateBookingInfo({ timeBookingId: item.timeID });
                      toast.success(
                        `Đã chọn thời gian ${item.time} thành công!`,
                        {
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        }
                      );
                    }}
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
              onClick={submit}
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
