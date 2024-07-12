import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logoutUser } from "../../store/authActions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { CustomizedBadges } from "../icon/CustomizedBadges";
import ChevronDownIcon from "../icon/icondropdown";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";
interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let accessToken = useSelector((state: RootState) => state.auth.accessToken);
  let userInformation = useSelector(
    (state: RootState) => state.userInfo.userInfo
  );

  if (!accessToken) {
    const tokenFromLocalStorage = localStorage.getItem("access-token");
    const userFromLocalStorage = localStorage.getItem("user-info");
    if (tokenFromLocalStorage) {
      accessToken = tokenFromLocalStorage;
    }
    if (userFromLocalStorage) {
      userInformation = JSON.parse(userFromLocalStorage);
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");

  // useEffect(() => {
  //   const googleUserInfo = localStorage.getItem("google-user-info");
  //   if (googleUserInfo) {
  //     const userInfo = JSON.parse(googleUserInfo);
  //     console.log("Retrieved user info:", userInfo);
  //     setDisplayName(userInfo.displayName);
  //   } else {
  //     console.log("No Google user info found in local storage");
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-info");
    localStorage.removeItem("google-user-info");
    localStorage.removeItem("usersID");
    dispatch(logoutUser());
    navigate("/login");
    toast.success("Đăng xuất thành công", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = "//js-na1.hs-scripts.com/46526271.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // console.log("Display Name in Header:", displayName);
  return (
    <header
      className={`${className} flex items-center py-[25px] border-blue_gray-100_01 border-b border-solid relative`}
    >
      <Link to="/">
        <Img
          src="http://res.cloudinary.com/dpxs39hkb/image/upload/v1718988677/uajyaf0i57hcj6alz6oy.png"
          alt="headerlogo"
          className="h-[45px] w-[54px] object-contain ml-[14rem]"
        />
      </Link>

      <div className="mx-auto flex w-full max-w-[1079px] items-center justify-between gap-5 md:flex-col ml-10">
        <ul className="flex flex-wrap gap-[34px] ">
          <li>
            <Link to="/thumnail">
              <Heading as="p">Giới Thiệu</Heading>
            </Link>
          </li>
          <li>
            <Link to="/item">
              <Heading as="p">Dịch Vụ</Heading>
            </Link>
          </li>
          <li>
            <Link to="/spa">
              <Heading as="p">Spa</Heading>
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <Heading as="p">Đặt Lịch</Heading>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <Heading as="p">Blog</Heading>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <Heading as="p">Thông Tin</Heading>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Heading as="p">Liên Hệ</Heading>
            </Link>
          </li>
          <li>
            <Link to="/lienhe">
              <Heading as="p">Liên Hệ Admin</Heading>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px]">
            <CustomizedBadges />
          </div>

          {accessToken && userInformation ? (
            <div
              className="relative flex items-center gap-2.5"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="rounded-full w-[42px] h-[42px] bg-blue_gray-100_02 flex items-center justify-center">
                <span className="text-gray-900 font-semibold">
                  {userInformation.accountName?.[0] || displayName}
                </span>
              </div>
              <Heading
                size="xl"
                as="h6"
                className="tracking-[0.36px] !font-montserrat13 !font-semibold !text-gray-900_06 ml-2"
              >
                {userInformation.accountName || displayName}
              </Heading>
              <div className="relative">
                <button
                  className="text-gray-900 focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <ChevronDownIcon />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Button
                      className="block w-full text-white px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      onClick={handleLogout}
                    >
                      <Text className="text-white">Đăng xuất</Text>
                    </Button>
                    <Link to="/profilepage">
                      <button className="block w-full text-white px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <Text className="text-white">Thông tin của tôi</Text>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button
                shape="round"
                className="min-w-[140px] !rounded-3xl border border-solid border-gray-900_06 font-montserrat font-semibold sm:px-5"
              >
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
