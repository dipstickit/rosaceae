import { Img, Text } from "./..";

interface Props {
  className?: string;
  title?: string;
  titleProps?: string;
  price?: string;
  categories?: any[];
  setCategoryName: any;
  setMinMax: any;
}

export default function Sidebar2({
  title = "Dịch vụ",
  titleProps = "Tất cả",
  price = "Giá",
  categories = [],
  setCategoryName,
  setMinMax,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} w-[18%] md:w-full md:p-3`}>
      <div className="bg-[url(/images/img_group_1278.svg)] pb-4 h-auto self-stretch bg-cover bg-no-repeat px-3 pt-3 rounded-lg shadow-md">
        <div className="flex flex-col items-start gap-1">
          <Text size="7xl" as="p" className="!font-medium !text-gray-900">
            {title}
          </Text>
          <div className="w-full mt-3">
            <div onClick={() => setCategoryName(undefined)} className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
              <Text size="6xl" as="p" className="!text-gray-900">
                {titleProps}
              </Text>
              <Text size="4xl" as="p" className="!font-alata20 !text-gray-500">
                2
              </Text>
            </div>
            {categories.map((cate) => (
              <div key={cate.categoryName} onClick={() => setCategoryName(cate.categoryName)} className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <Text size="6xl" as="p" className="!text-gray-900">
                  {cate.categoryName}
                </Text>
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-500">
                  2
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[url(/images/img_group_1278.svg)] pb-4 mt-6 h-auto self-stretch bg-cover bg-no-repeat px-3 pt-3 rounded-lg shadow-md">
        <div className="flex flex-col items-start gap-2">
          <Text size="6xl" as="p" className="!font-medium !text-gray-900">
            {price}
          </Text>
          <div className="w-full mt-3">
            <div className="flex flex-col gap-2">
              <label className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <input
                  type="radio"
                  name="price"
                  defaultChecked
                  onClick={() => setMinMax(undefined, undefined)}
                  className="mr-2"
                />
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-900">
                  Tất cả
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => setMinMax(0, 100000)}
                  className="mr-2"
                />
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-900">
                  0k-100k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => setMinMax(100000, 400000)}
                  className="mr-2"
                />
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-900">
                  100k-400k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => setMinMax(400000, 700000)}
                  className="mr-2"
                />
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-900">
                  400k-700k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => setMinMax(700000, 1000000)}
                  className="mr-2"
                />
                <Text size="4xl" as="p" className="!font-alata20 !text-gray-900">
                  700k-1000k
                </Text>
              </label>
            </div>
            <div className="h-[9px] relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
