import { Heading, Text, Img, RatingBar } from "./../..";

interface Props {
  className?: string;
  userimage?: string;
  title?: string;
  saleprice?: string;
  oriprice?: string;
  saleoff?: string;
}

export default function ProductCardService({
  userimage = "images/img_rectangle_6028.png",
  title = "Massage cổ vai gáy",
  oriprice = "₫199.000",
  saleprice = "₫199.000",
  saleoff = "25% Off",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full`}
    >
      <Img
        src={userimage}
        alt="image"
        className="h-[282px] w-full object-cover md:h-auto"
      />
      <div className="mt-4 flex flex-col items-center w-full">
        <Heading as="h6" className="tracking-[0.50px] !text-indigo-900 text-center">
          {title}
        </Heading>
        <div className="flex justify-center w-full mt-2">
          <RatingBar
            value={4}
            isEditable={true}
            color="#cfd9de"
            activeColor="#ffa331"
            size={14}
            className="flex"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-2">
          <Heading as="h6" className="tracking-[0.50px] !text-light_blue-A200">
            {saleprice}
          </Heading>
          <Text
            size="xl"
            as="p"
            className="tracking-[0.50px] ml-[5px] line-through !text-gray-500"
          >
            {oriprice}
          </Text>
          <Heading
            size="s"
            as="p"
            className="tracking-[0.50px] ml-2 text-sm font-bold !text-pink-300"
          >
            {saleoff}
          </Heading>
        </div>
      </div>
    </div>
  );
}
