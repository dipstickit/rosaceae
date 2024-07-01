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
    <div
      {...props}
      className={`${props.className} flex flex-col w-full items-center`}
    >
      <Img
        src={userimage}
        alt="womanhavingbe"
        className="w-full object-cover h-[445px] md:h-auto"
      />
      <div className="relative w-full max-w-xl flex flex-col items-center mt-[-35px]">
        <div className="rounded-[35px] p-5 flex flex-col items-center">
          <Text as="p" className="text-center leading-[27px] !text-black-900">
            <span className="text-black-900">
              <br />
            </span>
            <span className="text-lime-800">Xông hơi massage</span>
            <span className="text-pink_300_02">
              <br />
            </span>
            <span className="font-oldstandardtt text-xl font-bold text-black-900">
              SỨC KHỎE TỰ NHIÊN
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}
