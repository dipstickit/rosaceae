import { Img, Heading } from "./..";
interface Props {
  className?: string;
}
export default function Header2({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col self-stretch justify-between items-center pl-[100px] pr-[84px] gap-5 py-[25px] md:px-5 sm:p-5 border-blue_gray-100_01 border-b border-solid`}
    >
      <Img
        src="images/img_header_logo.png"
        alt="headerlogo"
        className="w-[54px] h-[45px] object-contain"
      />{" "}
      <div className="max-w-[1064px] mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
        {" "}
        <ul className="gap-[38px] flex flex-wrap">
          {" "}
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Giới Thiệu{" "}
              </Heading>{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Dịch Vụ{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Spa{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Đặt Lịch{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold" >Blog </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Sự Kiện{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Thông Tin{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Heading as="p" className="text-sm font-bold">
                {" "}
                Liên Hệ{" "}
              </Heading>{" "}
            </a>{" "}
          </li>
        </ul>
        <div className="w-[23%] flex items-center justify-between gap-5 md:w-full">
          {" "}
          <div className="gap-[30px] flex items-center">
            {" "}
            <a href="#">
              {" "}
              <Img
                src="images/img_search_gray_900_06.svg"
                alt="search"
                className="w-[28px] h-[28px]"
              />{" "}
            </a>{" "}
            <a href="#">
              {" "}
              <Img
                src="images/img_bi_bag_dash.svg"
                alt="bibagdash"
                className="w-[26px] h-[26px]"
              />{" "}
            </a>{" "}
          </div>
          <div className="flex flex-1 items-center justify-center gap-2.5">
            {" "}
            <div className="rounded-[21px] w-[42px] h-[42px] flex-1 bg-blue_gray-100_02" />{" "}
            <Heading
              size="xl"
              as="h6"
              className="tracking-[0.36px] !font-montserrat13 !font-semibold !text-gray-900_06"
            >
              {" "}
              User{" "}
            </Heading>{" "}
            <a href="#">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="checkmark"
                className="w-[20px] h-[20px]"
              />{" "}
            </a>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </header>
  );
}
