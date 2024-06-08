import { Helmet } from "react-helmet";
import { Text, Img, SelectBox, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCardService from "../../components/Card/ProductCardService";
import ShopService from "../../api/shop.api";
import CategoryService from "../../api/category.api";
import Sidebar2 from "../../components/Sidebar2";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SpaDetailPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [categoryName, setCategoryName] = useState();
  const [page, setPage] = useState(0);
  const [minPrice, setMin]: any = useState();
  const [maxPrice, setMax]: any = useState();

  const params = useParams();

  const id: any = params.id;

  const setMinMax = (min: number, max: number) => {
    setMin(min);
    setMax(max);
  };

  const fetchCategories = async () => {
    CategoryService.getCategories()
      .then((res: any) => {
        console.log("categories", res);
        setCategories(res.data.content);
      })
      .catch((error) => {
        console.error("Error fetching items:", (error as Error).message);
      });
  };

  const fetchItem = () => {
    ShopService.getShopById(parseInt(id), {
      page,
      size: 6,
      categoryName,
      maxPrice,
      minPrice,
    })
      .then((res: any) => {
        console.log("shop by id", res);
        setItems(res?.data?.items?.content);
        setTotalPage(res?.data?.items?.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching items:", (error as Error).message);
      });
  };

  useEffect(() => {
    fetchItem();
    fetchCategories();
  }, [page, categoryName, minPrice, maxPrice]);

  const onPageChange = async (page: number) => {
    setPage(page - 1);
  };

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header />
        <div className="sm:gap-[39px] md:gap-[59px] gap-[79px] flex flex-col">
          <div className="!bg-gray-100_08 py-4 flex justify-center items-center px-5 font-bold">
            <div className="text-blue-400 pr-2">Trang chủ /</div>
            <Link to="/spafeedback" className="text-black pr-2">
              Đánh giá
            </Link>
          </div>
          <div className="flex items-start md:flex-col">
            <Sidebar2
              categories={categories}
              setCategoryName={setCategoryName}
              setMinMax={setMinMax} className="mt-60"
            />
            <div className="flex flex-1 flex-col gap-1 md:self-stretch md:p-5">
              <div className="gap-[17px] w-[95%] flex flex-col md:w-full">
                <Img
                  src="/public/OfferBanner.png"
                  alt="image"
                  className="h-[232px] object-cover r"
                />
                <div className="bg-[url(/public/images/img_group_1278.svg)] pl-[23px] h-[45px] bg-cover bg-no-repeat md:h-auto sm:pl-5">
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <div className="flex items-center justify-between gap-5 w-[32%] md:w-full">
                      <Text as="p" className="!font-alata12 !text-gray-900_03">
                        36 dịch vụ
                      </Text>
                      <div className="flex items-center justify-between gap-5 w-[65%]">
                        <Text
                          as="p"
                          className="!font-alata12 !text-gray-900_03"
                        >
                          Lọc
                        </Text>
                        <SelectBox
                          size="sm"
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_900_03.svg"
                              alt="arrow down"
                              className="h-[3px] w-[7px]"
                            />
                          }
                          name="loidchv"
                          placeholder={`Loại dịch vụ`}
                          options={dropDownOptions}
                          className="w-[67%] gap-px font-alata12 text-gray-900_03 sm:pr-5"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 w-[62%] md:w-full">
                      <div className="flex items-center justify-center gap-[7px] w-[29%] mb-1.5">
                        <Text
                          as="p"
                          className="!font-alata12 !text-gray-900_03"
                        >
                          Show
                        </Text>
                        <SelectBox
                          size="xs"
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_900_03.svg"
                              alt="arrow down"
                              className="h-[3px] w-[7px]"
                            />
                          }
                          name="twelve"
                          placeholder={`12`}
                          options={dropDownOptions}
                          className="flex-grow gap-px font-alata12 text-gray-900_03 sm:px-5"
                        />
                      </div>
                      <div className="flex justify-center w-[19%]">
                        <div className="relative flex bg-gray-100_05 p-3.5 z-[1]">
                          <Img
                            src="images/img_grid.svg"
                            alt="grid"
                            className="h-[15px]"
                          />
                        </div>
                        <Img
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                          className="ml-[-1px] w-[50%] h-[45px] relative"
                        />
                      </div>
                    </div>
                  </div>
                </div>                
                <div className="gap-[53px] grid grid-cols-3 justify-center md:grid-cols-1 mb-[20px]">
                  {/* {items.map((product: any, index) => (
                    <ProductCardService key={index} {...product} />
                  ))} */}
                                    {items.map((product: any, index) => (
                    <ProductCardService
                    key={index}
                    itemImages={product.itemImages}
                    itemName={product.itemName}
                    itemPrice={product.itemPrice}
                    discount={product.discount}
                    id={product.itemId}
                  />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <Pagination
              currentPage={page + 1}
              totalPages={totalPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
