import { Img, Text } from "./..";
interface Props {
  className?: string;
  title?: string;
  titleProps?: string;
  price?: string;
}
export default function Sidebar2({
  title = "Dịch vụ",
  titleProps = "Tóc",
  price = "Giá",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} w-[21%] md:w-full md:p-5`}>
      <div className="bg-[url(/public/images/img_group_1278.svg)] pb-[5px] h-[193px] self-stretch bg-cover bg-no-repeat px-4 pt-4 md:h-auto">
        <div className="flex flex-col items-start gap-0.5">
          <Text size="9xl" as="p" className="!font-medium !text-gray-900_03">
            {title}
          </Text>
          <div className="self-stretch">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Text size="8xl" as="p" className="!text-gray-900_04">
                  {titleProps}
                </Text>
                <Text
                  size="5xl"
                  as="p"
                  className="!font-alata20 !text-gray-900_59"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Text size="8xl" as="p" className="!text-gray-900_04">
                  Da mặt
                </Text>
                <Text
                  size="5xl"
                  as="p"
                  className="!font-alata20 !text-gray-900_59"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Text size="8xl" as="p" className="!text-gray-900_04">
                  Massage
                </Text>
                <Text
                  size="5xl"
                  as="p"
                  className="!font-alata20 !text-gray-900_59"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Text size="8xl" as="p" className="!text-gray-900_04">
                  Trang điểm
                </Text>
                <Text
                  size="5xl"
                  as="p"
                  className="!font-alata20 !text-gray-900_59"
                >
                  4
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/public/images/img_group_1278.svg)] pb-[21px] mt-[120px] h-[112px] self-stretch bg-cover bg-no-repeat px-3.5 pt-3.5 md:h-auto sm:pb-5">
        <div className="flex flex-col items-start gap-2.5">
          <Text size="5xl" as="p" className="!font-medium !text-gray-900_03">
            {price}
          </Text>
          <div className="flex flex-col gap-0.5 self-stretch">
            <div className="w-[87%] flex flex-wrap justify-between gap-5 md:w-full">
              <Text
                size="5xl"
                as="p"
                className="self-end !font-alata20 !text-gray-900_04"
              >
                Khoảng:
              </Text>
              <Text
                size="5xl"
                as="p"
                className="self-start !font-alata20 !text-gray-900_03"
              >
                200k-1000k
              </Text>
            </div>
            <div className="h-[9px] relative">
              <div className="w-[97%] h-[3px] relative bottom-0 left-0 right-0 top-0 m-auto bg-gray-900_63">
                <div
                  style={{ width: "89%" }}
                  className="absolute h-full bg-blue-600"
                />
              </div>
              <div className="right-[-0.39px] w-[92%] absolute bottom-0 top-0 my-auto flex h-max justify-between gap-5">
                <Img src="images/img_hand.svg" alt="hand" className="h-[9px]" />
                <Img src="images/img_hand.svg" alt="hand" className="h-[9px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
