import { Img, Heading } from "./..";
import { Link } from "react-router-dom"; // Ensure you import Link from your routing library

interface Props {
  className?: string;
}

export default function Header2({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col self-stretch justify-between items-center pl-[100px] pr-[84px] gap-5 py-[25px] md:px-5 sm:p-5 border-blue_gray-100_01 border-b border-solid`}
    > 
    <Link to="/">
      <Img
        src="images/img_header_logo.png"
        alt="headerlogo"
        className="w-[54px] h-[45px] object-contain"
      />
    </Link>
      <div className="max-w-[1064px] mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
        <ul className="gap-[38px] flex flex-wrap">
          <li>
            <Link to="/thumnail">
              <Heading as="p" className="text-sm font-bold">
                Giới Thiệu
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/makeupservicepage">
              <Heading as="p" className="text-sm font-bold">
                Dịch Vụ
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/spa">
              <Heading as="p" className="text-sm font-bold">
                Spa
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <Heading as="p" className="text-sm font-bold">
                Đặt Lịch
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Heading as="p" className="text-sm font-bold">
                Blog
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Heading as="p" className="text-sm font-bold">
                Sự Kiện
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Heading as="p" className="text-sm font-bold">
                Thông Tin
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Heading as="p" className="text-sm font-bold">
                Liên Hệ
              </Heading>
            </Link>
          </li>
        </ul>
        <div className="w-[23%] flex items-center justify-between gap-5 md:w-full">
          <div className="gap-[30px] flex items-center">
            <Link to="/search">
              <Img
                src="images/img_search_gray_900_06.svg"
                alt="search"
                className="w-[28px] h-[28px]"
              />
            </Link>
            <Link to="/cart">
              <Img
                src="images/img_bi_bag_dash.svg"
                alt="bibagdash"
                className="w-[26px] h-[26px]"
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <div className="rounded-[21px] w-[42px] h-[42px] flex-1 bg-blue_gray-100_02" />
            <Heading
              size="xl"
              as="h6"
              className="tracking-[0.36px] !font-montserrat13 !font-semibold !text-gray-900_06"
            >
              User
            </Heading>
            <Link to="#">
              <Img
                src="images/img_checkmark.svg"
                alt="checkmark"
                className="w-[20px] h-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
