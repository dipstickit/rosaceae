import { Button, Heading, RatingBar, Img } from "./../..";
interface Props {
  className?: string;
  title?: string;
  buttontext?: string;
  userimage?: string;
  ratingCount?: number; // New prop
}
export default function ProductList({
  title = "",
  buttontext = "",
  userimage = "",
  ratingCount = 54,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} self-stretch pr-[45px] md:pr-5 bg-white-A700 shadow-xs rounded`}
    >
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <div className="gap-[29px] w-[68%] flex items-start justify-center md:w-full md:flex-col">
          <div className="w-[27%] h-[143px] relative md:w-full">
            <Img
              src={userimage}
              alt="gà_spa"
              className="h-[143px] absolute bottom-0 left-0 right-0 top-0 m-auto w-full rounded object-cover"
            />
          </div>
          <div className="gap-[29px] mt-[7px] flex flex-1 flex-col items-start md:self-stretch">
            <Heading
              size="2xl"
              as="h5"
              className="text-shadow-ts7 !font-volkhov7 !text-blue_gray-900_06"
            >
              {title}
            </Heading>
            <div className="w-[25%] flex items-center gap-1.5 md:w-full">
              <RatingBar
                value={4}
                isEditable={true}
                color="#cfd9de"
                activeColor="#ffa331"
                size={14}
                className="flex justify-between self-start"
              />
              <Heading
                size="xs"
                as="p"
                className="!font-mulish7 text-xs font-semibold !text-gray-600"
              >
                ({ratingCount} đánh giá)
              </Heading>
            </div>
          </div>
        </div>
        <Button
          color="teal_200"
          size="xs"
          className="rounded-[13px] min-w-[130px] mb-[17px] self-end font-mulish7 font-extrabold uppercase sm:px-5"
        >
          {buttontext}
        </Button>
      </div>
    </div>
  );
}
