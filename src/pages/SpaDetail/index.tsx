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
              setMinMax={setMinMax}
              className="mt-96"
            />
            <div className="flex flex-1 flex-col gap-1 md:self-stretch md:p-5">
              <div className="gap-[17px] w-[95%] flex flex-col md:w-full">
                <Img
                  src="https://res.cloudinary.com/dpxs39hkb/image/upload/v1718990047/jvrp9ex08kejnhzeqbn0.png"
                  alt="image"
                  className="h-[375px] w-full object-cover object-center"
                />
                <div className="gap-[53px] grid grid-cols-3 justify-center md:grid-cols-1 mb-[20px]">
                  {items.map((product: any, index) => (
                    <ProductCardService
                      key={index}
                      itemImages={product.itemImages}
                      itemName={product.itemName}
                      itemPrice={product.itemPrice}
                      discount={product.discount}
                      itemId={product.itemId}
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
