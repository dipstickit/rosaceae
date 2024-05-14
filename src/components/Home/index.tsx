import { Img } from "../Img";
import { Text } from "../Text";

interface Props {
  className?: string;
  userimage?: string;
  messagetext?: string;
}

export default function Home({
  userimage = "images/img_woman_having_be.png",
  messagetext,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      {" "}
      <div className="flex flex-col items-center self-stretch">
        {" "}
        <Img
          src={userimage}
          alt="womanhavingbe"
          className="h-[445px] w-full object-cover md:h-auto"
        />{" "}
        <div className="relative mt-[-84px] flex w-[70%] md:w-full">
          {" "}
          <div className="flex w-full flex-col items-center">
            {" "}
            <Text
              as="p"
              className="relative z-[1] w-[83%] text-center leading-[27px] !text-black-900 md:w-full"
            >
              {" "}
              <span className="text-black-900">
                {" "}
                <>
                  {" "}
                  <br />{" "}
                </>{" "}
              </span>{" "}
              <span className="text-lime-800">Xông hơi massage</span>{" "}
              <span className="text-pink_300_02">
                {" "}
                <>
                  {" "}
                  <br />{" "}
                </>{" "}
              </span>{" "}
              <span className="font-oldstandardtt text-xl font-bold text-black-900">
                SỨC KHỎE TỰ NHIÊN
              </span>{" "}
            </Text>{" "}
            <div className="relative mt-[-71px] h-[71px] self-stretch rounded-[35px] bg-white-A700_cc" />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
