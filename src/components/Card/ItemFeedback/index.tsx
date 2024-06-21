import { Text } from "../../Text";

interface Props {
  className?: string;
  itemDescription?: string;
}

export default function Feedback({ itemDescription, className }: Props) {
  return (
    <div
      className={`${className} h-[300px] md:h-auto pt-[11px] pb-[13px] bg-cover bg-no-repeat`}
    >
      <div className="w-full flex justify-center">
        <div className="w-full md:w-11/12 lg:w-3/4 flex flex-col items-center">
          <div className="relative bg-[url(/public/images/img_tabs.svg)] z-[3] px-6 py-8 md:px-4 md:py-6 sm:p-4 bg-cover bg-no-repeat rounded-lg shadow-md">
            <div className="w-full flex flex-col">
              <div className="flex items-start gap-5 mb-4">
                <div className="flex flex-col">
                  <Text as="p" size="5xl" className="!text-blue-600">
                    Thông tin dịch vụ
                  </Text>
                  <div className="h-[4px] bg-blue-600 mt-2" />
                </div>
                <div className="flex items-center gap-2 mt-[2px]">
                  <Text
                    size="5xl"
                    as="p"
                    className="!font-opensans !text-gray-900 ml-5"
                  >
                    Đánh giá
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!font-opensans !text-gray-900 mb-1"
                  >
                    (35)
                  </Text>
                </div>
              </div>
              <div className="mt-4">
                <Text
                  className="leading-[180%] tracking-0.5px !text-gray-900"
                  as="p"
                >
                  {itemDescription}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
