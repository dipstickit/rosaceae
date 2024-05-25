import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
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
            <Link to="/makeupservicepage">
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
          <Link to="/login">
            <Button
              shape="round"
              className="min-w-[160px] !rounded-sm border border-solid border-gray-900_06 font-montserrat font-semibold sm:px-5"
            >
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
