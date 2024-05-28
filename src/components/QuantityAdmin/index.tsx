import { Text, Heading, Button, Img } from "./..";
interface Props {
  className?: string;
  price?: string;
  name?: string;
  propsTitle?: string;
}
export default function QuantityAdmin({
  price = "500.000vnd",
  name = "Tổng doanh thu",
  propsTitle = "+8% so với ngày hôm qua",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start pt-5 pb-[18px] px-3 bg-pink-50 rounded-[16px]`}
    >
      {" "}
      <Button
        color="pink_300_01"
        size="2xl"
        shape="circle"
        className="!rounded-[20px] w-[40px] ml-2 md:ml-0"
      >
        {" "}
        <Img src="images/img_settings.svg" />{" "}
      </Button>{" "}
      <Heading
        size="3xl"
        as="h4"
        className="mt-[13px] self-center !font-semibold !text-blue_gray-900"
      >
        {" "}
        {price}{" "}
      </Heading>
      <Text
        size="3xl"
        as="p"
        className="ml-2 mt-2 !font-medium !text-blue_gray-700_01 md:ml-0"
      >
        {" "}
        {name}{" "}
      </Text>{" "}
      <Text as="p" className="mt-1.5 !font-medium !text-blue-A200_02">
        {" "}
        {propsTitle}{" "}
      </Text>{" "}
    </div>
  );
}
