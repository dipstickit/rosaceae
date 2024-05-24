import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input, Heading } from "./..";
import React from "react";
interface Props {
  className?: string;
  avatar?: string;
  name?: string;
}
export default function HeaderAdmin({
  avatar = "images/img_rectangle_1393.png",
  name = "Musfiq",
  ...props
}: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <header
      {...props}
      className={`${props.className} flex flex-col items-center gap-[15px]`}
    >
      <div className="max-w-[1132px] mx-auto flex w-full items-start justify-between gap-5 md:flex-col md:p-5">
        <Heading as="h1" className="!font-semibold">
          {/* Setting */}
        </Heading>
        <Input
          color="gray_50_07"
          size="md"
          shape="round"
          name="search"
          placeholder={`Tìm kiếm ở đây...`}
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          prefix={
            <Img
              src="images/img_search.svg"
              alt="search"
              className="h-[32px] w-[32px] cursor-pointer"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
                height={32}
                width={32}
                fillColor="#5d5fefff"
              />
            ) : null
          }
          className="mb-[5px] w-[39%] gap-2 font-poppins4 text-blue_gray-500 md:w-full sm:px-5"
        />
        <div className="w-[24%] flex items-center justify-center gap-6 md:w-full">
          <a href="#">
            <Button size="3xl" shape="square" className="w-[48px]">
              <Img src="images/img_clock_gray_50_02.svg" />
            </Button>
          </a>
          <div className="flex flex-1 items-center gap-5">
            <Img
              src={avatar}
              alt="image"
              className="rounded-[16px] w-[60px] h-[60px] object-cover"
            />
            <div className="flex flex-1 flex-col items-start">
              <div className="flex items-start justify-between gap-5 self-stretch">
                <Text
                  as="p"
                  className="!font-poppins4 !font-medium !text-blue_gray-900"
                >
                  {name}
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                  className="w-[16px] h-[16px]"
                />
              </div>
              <Text
                size="xl"
                as="p"
                className="!font-poppins4 !text-blue_gray-500"
              >
                Admin
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full self-stretch bg-indigo-50" />
    </header>
  );
}
