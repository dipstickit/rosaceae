import { Helmet } from "react-helmet";
import { Img, Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/Card/ProductCard";
import { Link } from "react-router-dom";
import productService from "../../api/product.api";
import categoryService from "../../api/category.api";
import { useEffect, useState } from "react";
import { Item, ResponseData } from "../../types/Item.model";
import Pagination from "../../components/Pagination";

export default function MakeupServicePagePage() {
  const [listProducts, setListProducts] = useState<Item[]>([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItem = async () => {
    try {
      const response = await productService.getItem({});
      console.log("Response headers:", response.headers);
      console.log("Response data:", response.data);

      if (response.data.content) {
        setListProducts(response.data.content);
      } else {
        throw new Error("No content in response data.");
      }
    } catch (error) {
      console.error("Error fetching items:", (error as Error).message);
    }
  };

  const fetchCategories = async () => {
    categoryService
      .getCategories()
      .then((res: any) => {
        console.log("categories", res);
        setCategories(res.data.content);
      })
      .catch((error) => {
        setError((error as Error).message);
        console.error("Error fetching items:", (error as Error).message);
      });
  };
  useEffect(() => {
    fetchItem();
    fetchCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />
      <div className="max-w-[1353px] mt-[46px] mx-auto flex w-full flex-col items-center md:p-5">
        <div className="h-[637px] relative self-stretch">
          <Text
            size="8xl"
            as="p"
            className="leading-[150%] right-[-0.66px] bottom-[0.00px] w-[62%] absolute m-auto !font-montserrat13 !text-gray-800"
          >
            Nơi cung cấp dụng cụ làm đẹp tại nhà là không gian thoải mái và tiện
            lợi, nơi bạn có thể tận hưởng các liệu trình chăm sóc cá nhân chất
            lượng, do các chuyên gia làm đẹp thực hiện ngay tại không gian riêng
            tư của mình.
          </Text>
          <div className="top-[0.00px] gap-[39px] w-[97%] absolute left-0 right-0 m-auto flex md:relative md:flex-col">
            <div className="sm:gap-[26px] gap-[53px] w-[39%] flex flex-col items-start md:w-full">
              <Img
                src="images/img_mask_group_495x516.png"
                alt="image"
                className="h-[495px] w-full object-cover md:h-auto"
              />
              <div className="flex">
                <Heading
                  size="6xl"
                  as="h1"
                  className="!font-syne13 !text-gray-900_06"
                >
                  <span className="text-gray-900_06">Địa điểm làm</span>{" "}
                  <span className="text-orange-700">&nbsp;đẹp</span>{" "}
                </Heading>
              </div>
            </div>
            <Img
              src="images/img_image_54.png"
              alt="image"
              className="w-[58%] h-[475px] object-cover md:w-full"
            />
          </div>
        </div>

        <div className="gap-[43px] flex flex-1 flex-col mt-[5rem]"></div>
        <div className="gap-[188px] mt-[221px] w-[97%] flex flex-col md:w-full">
          {categories.map((cate: any) => (
            <>
              <div className="flex flex-1 pt-1">
                <div className="gap-[43px] flex w-full flex-col">
                  <div className="flex items-center justify-between gap-5">
                    <Heading
                      size="11xl"
                      as="h2"
                      className="!font-sura13 !text-gray-900_06"
                    >
                      {cate?.categoryName}
                    </Heading>
                    <Button
                      shape="round"
                      className="min-w-[210px] !rounded-sm border border-solid border-gray-900_06 font-montserrat13 sm:px-5"
                    >
                      Khám phá tất cả
                    </Button>
                  </div>
                  <div className="gap-[130px] w-[96%] flex md:w-full md:flex-col">
                    {listProducts
                      .filter(
                        (p: any) => p?.category?.categoryId == cate?.categoryId
                      )
                      .slice(0, 2)
                      .map((item, index) => (
                        <ProductCard
                          key={index}
                          className="gap-[34px] items-center md:w-full"
                          title={item.itemName}
                          img={item?.itemImages[0]?.imageUrl}
                          id={item.itemId}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer className="mt-[15px]" />
    </>
  );
}
