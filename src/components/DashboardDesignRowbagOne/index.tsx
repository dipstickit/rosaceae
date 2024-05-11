import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";

interface Props {
  className?: string;
  realitysalestext?: string;
  globaltext?: string;
  numbertext?: string;
}
export default function DashboardDesignRowbagOne({
  realitysalestext = "Doanh số thực tế",
  globaltext = "Toàn cầu",
  numbertext = "8.823",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center`}>
      {" "}
      <Button color="cyan_50" size="lg" className="w-[36px] rounded-md">
        {" "}
        <Img src="images/img_bag.svg" />{" "}
      </Button>{" "}
      <div className="ml-2.5 flex flex-col items-start self-start">
        {" "}
        <Heading size="xs" as="p" className="!text-blue_gray-900">
          {" "}
          {realitysalestext}{" "}
        </Heading>{" "}
        <Text size="s" as="p" className="!text-blue_gray-500">
          {" "}
          {globaltext}{" "}
        </Text>{" "}
      </div>{" "}
      <Text
        size="xl"
        as="p"
        className="ml-[47px] !font-medium !text-green-600_01"
      >
        {" "}
        {numbertext}{" "}
      </Text>{" "}
    </div>
  );
}
