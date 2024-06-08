import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/authActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let accessToken = useSelector((state: any) => state.auth.accessToken);
  let userInformation = useSelector((state: any) => state.userInfo.userInfo);

  // Check local storage
  if (accessToken === null) {
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

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-info");
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <header
      {...props}
      className={`${props.className} flex items-center py-[25px] border-blue_gray-100_01 border-b border-solid`}
    >
      <Link to="/">
        <Img
          src="images/img_header_logo.png"
          alt="headerlogo"
          className="h-[45px] w-[54px] object-contain ml-[12rem]"
        />
      </Link>
      <div className="mx-auto flex w-full max-w-[1079px] items-center justify-between gap-5 md:flex-col">
        <ul className="flex flex-wrap gap-[34px]">
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
            <Link to="/su-kien">
              <Heading as="p">Sự Kiện</Heading>
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
        </ul>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px]">
            <Link to="/search">
              <Img
                src="images/img_search_gray_900_06.svg"
                alt="search"
                className="h-[28px] w-[28px]"
              />
            </Link>
            <Link to="/cart">
              <Img
                src="images/img_bi_bag_dash.svg"
                alt="bibagdash"
                className="h-[26px] w-[26px]"
              />
            </Link>
          </div>
          {accessToken && userInformation ? (
            <div
              className="relative flex items-center gap-2.5"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="rounded-full w-[42px] h-[42px] bg-blue_gray-100_02 flex items-center justify-center">
                {/* User avatar or placeholder */}
                <span className="text-gray-900 font-semibold">
                  {userInformation.accountName[0]}
                </span>
              </div>
              <Heading
                size="xl"
                as="h6"
                className="tracking-[0.36px] !font-montserrat13 !font-semibold !text-gray-900_06 ml-2"
              >
                {userInformation.accountName}
              </Heading>
              <div className="relative">
                <button className="text-gray-900 focus:outline-none">
                  <Img
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                    className="w-[20px] h-[20px]"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                      className="block w-full px-4 py-2 text-white bg-gray-100 hover:bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button
                shape="round"
                className="min-w-[160px] !rounded-sm border border-solid border-gray-900_06 font-montserrat font-semibold sm:px-5"
              >
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
