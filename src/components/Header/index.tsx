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
      {" "}
      <Img
        src="images/img_header_logo.png"
        alt="headerlogo"
        className="h-[45px] w-[54px] object-contain"
      />{" "}
      <div className="mx-auto flex w-full max-w-[1079px] items-center justify-between gap-5 md:flex-col">
        {" "}
        <ul className="flex flex-wrap gap-[34px]">
          {" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p">Giới Thiệu</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p">Dịch Vụ</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#">
              {" "}
              <Heading as="p">Spa</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p">Đặt Lịch</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p">Blog</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p"> Sự Kiện</Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p">Thông Tin</Heading>{" "}
            </a>
          </li>{" "}
          <li>
            <a href="#">
              {" "}
              <Heading as="p">Liên Hệ</Heading>
            </a>{" "}
          </li>{" "}
        </ul>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px]">
            {" "}
            <a href="#">
              {" "}
              <Img
                src="images/img_search_gray_900_06.svg"
                alt="search"
                className="h-[28px] w-[28px]"
              />
            </a>
            <a href="#">
              {" "}
              <Img
                src="images/img_bi_bag_dash.svg"
                alt="bibagdash"
                className="h-[26px] w-[26px]"
              />{" "}
            </a>{" "}
          </div>{" "}
          <Button
            shape="round"
            className="min-w-[160px] !rounded-sm border border-solid border-gray-900_06 font-montserrat font-semibold sm:px-5"
          >
            {" "}
            Đăng nhập{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
