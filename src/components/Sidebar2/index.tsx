import React from "react";
import { Img, Text } from "./..";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handleCategoryClick = (categoryName?: string) => {
    setCategoryName(categoryName);
    toast(`Đã chọn danh mục: ${categoryName ? categoryName : titleProps}`);
  };

  const handlePriceClick = (
    min: number | undefined,
    max: number | undefined,
    label: string
  ) => {
    setMinMax(min, max);
    toast(`Đã chọn khoảng giá: ${label}`);
  };

  return (
    <div {...props} className={`${props.className} w-[18%] md:w-full md:p-3`}>
      <div className="bg-[url(/images/img_group_1278.svg)] pb-4 h-auto self-stretch bg-cover bg-no-repeat px-4 pt-4 rounded-lg shadow-md">
        <div className="flex flex-col items-start gap-2">
          <Text size="7xl" as="p" className="font-medium text-gray-900">
            {title}
          </Text>
          <div className="w-full mt-3">
            <div
              onClick={() => handleCategoryClick(undefined)}
              className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition"
            >
              <Text size="6xl" as="p" className="text-gray-900">
                {titleProps}
              </Text>
              <Text size="4xl" as="p" className="font-alata20 text-gray-500">
                2
              </Text>
            </div>
            {categories.map((cate) => (
              <div
                key={cate.categoryName}
                onClick={() => handleCategoryClick(cate.categoryName)}
                className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition"
              >
                <Text size="6xl" as="p" className="text-gray-900">
                  {cate.categoryName}
                </Text>
                <Text size="4xl" as="p" className="font-alata20 text-gray-500">
                  2
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[url(/images/img_group_1278.svg)] pb-4 mt-6 h-auto self-stretch bg-cover bg-no-repeat px-4 pt-4 rounded-lg shadow-md">
        <div className="flex flex-col items-start gap-3">
          <Text size="6xl" as="p" className="font-medium text-gray-900">
            {price}
          </Text>
          <div className="w-full mt-3">
            <div className="flex flex-col gap-3">
              <label className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition">
                <input
                  type="radio"
                  name="price"
                  defaultChecked
                  onClick={() =>
                    handlePriceClick(undefined, undefined, "Tất cả")
                  }
                  className="mr-3"
                />
                <Text size="4xl" as="p" className="font-alata20 text-gray-900">
                  Tất cả
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => handlePriceClick(0, 100000, "0k-100k")}
                  className="mr-3"
                />
                <Text size="4xl" as="p" className="font-alata20 text-gray-900">
                  0k-100k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => handlePriceClick(100000, 400000, "100k-400k")}
                  className="mr-3"
                />
                <Text size="4xl" as="p" className="font-alata20 text-gray-900">
                  100k-400k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() => handlePriceClick(400000, 700000, "400k-700k")}
                  className="mr-3"
                />
                <Text size="4xl" as="p" className="font-alata20 text-gray-900">
                  400k-700k
                </Text>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded transition">
                <input
                  type="radio"
                  name="price"
                  onClick={() =>
                    handlePriceClick(700000, 1000000, "700k-1000k")
                  }
                  className="mr-3"
                />
                <Text size="4xl" as="p" className="font-alata20 text-gray-900">
                  700k-1000k
                </Text>
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
