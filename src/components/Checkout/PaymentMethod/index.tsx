import { Text, Img, Button } from "./../..";
interface Props {
  className?: string;
  payimg?: string;
  numberpay?: string;
  expired?: string;
}
export default function PaymentMethod({
  payimg = "",
  numberpay = "",
  expired = "",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center pt-4 pb-3.5 gap-4 border-gray-900_33 border border-solid bg-white-A700_33 flex-1 rounded-sm`}
    >
      <div className="flex flex-col items-center gap-3.5 self-stretch">
        <div className="w-[90%] flex items-center justify-between gap-5 md:w-full">
          <div className="flex flex-wrap items-start">
            <Img
              src="images/img_contrast.svg"
              alt="image"
              className="w-[24px] h-[24px]"
            />
            <Img src={payimg} alt="image" className="h-[17px] ml-3" />
            <Text as="p" className="tracking-[0.10px] ml-[17px] text-gray-950">
              {numberpay}
            </Text>
            <Text as="p" className="ml-[26px] !text-blue_gray-300_01">
              {expired}
            </Text>
          </div>
          <Button className="tracking-[0.10px] text-white p-2 text-sm rounded-full">
            Xóa
          </Button>
        </div>
      </div>
    </div>
  );
}
