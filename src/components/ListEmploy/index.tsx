import { Heading, Img, Button } from "./..";

interface Props {
  className?: string;
  imgIrl?: string;
  title?: string;
}

export default function ListEmploy({
  imgIrl = "images/img_rectangle_6056.png",
  title = "Uyên Nhi",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col w-[86%] md:w-full mt-[27px] gap-[75px] md:p-5`}
    >
      <div className="flex items-center gap-2">
        <Button
          color="blue_gray_100_02"
          size="9xl"
          shape="round"
          className="!rounded-[5px] w-[70px]"
        >
          <Img src="images/img_settings_black_900.svg" />
        </Button>
        <Heading
          as="p"
          className="leading-5 text-sm font-bevietnam11 font-semibold text-black-900"
        >
          Spa tự chọn
        </Heading>
      </div>
      <div className="flex items-center gap-2">
        <Img
          src={imgIrl}
          alt="Employee image"
          className="h-[67px] w-[67px] object-cover rounded-full md:h-auto md:w-auto"
        />
        <Heading
          as="p"
          className="text-sm font-bevietnam11 font-semibold text-black-900"
        >
          {title}
        </Heading>
      </div>
    </div>
  );
}
