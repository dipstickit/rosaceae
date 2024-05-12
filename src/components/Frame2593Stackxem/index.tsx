import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

interface Props {
  className?: string;
  userimage?: string;
  buttontext?: string;
  titletext?: string;
}
export default function Frame2593Stackxem({
  userimage = "images/img_rectangle_6017.png",
  buttontext = "XEM",
  titletext = "Mèo beauty  - Nguyễn Thị Minh Khai, Q1",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} relative container-xs`}>
      {" "}
      <div className="absolute bottom-[-0.15px] left-[0.00px] m-auto flex w-[57%] items-center justify-between gap-5 sm:relative sm:flex-col">
        {" "}
        <Img
          src={userimage}
          alt="image"
          className="h-[273px] w-[46%] rounded-[51px] object-cover sm:w-full"
        />{" "}
        <Button
          color="blue_gray_100_02"
          size="12xl"
          className="mb-[53px] min-w-[217px] self-end rounded-[41px] font-suwannaphum font-bold sm:px-5"
        >
          {" "}
          {buttontext}{" "}
        </Button>{" "}
      </div>{" "}
      <Heading
        size="8xl"
        as="h1"
        className="absolute right-[0.00px] top-[0.00px] m-auto !font-suwannaphum"
      >
        {" "}
        {titletext}{" "}
      </Heading>{" "}
    </div>
  );
}
