import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/Card/ProductList";
import shopService from "../../api/shop.api";
import Pagination from "../../components/Pagination";

interface Props {
  className?: string;
  title?: string;
  buttontext?: string;
  userimage?: string;
  ratingCount?: number;
}

const SpaPage: React.FC = () => {
  const [shops, setShops]:any = useState([])
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  
  const fetchShop = async () => {
    shopService
      .getShop({page, size:10})
      .then((res: any) => {
        console.log("shop", res);
        setShops(res.data.content);
        setTotalPage(res.data.totalPages)
      })
      .catch((error) => {
        console.error("Error fetching items:", (error as Error).message);
      });
  };
  useEffect(() => {
    fetchShop()
  },[page])

  const onPageChange = async (page:number) => {
    setPage(page-1)
  }
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header/>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="max-w-[1331px] gap-[33px] mt-[19px] mx-auto flex w-full flex-col items-center md:p-5">
          <div className="gap-[46px] flex flex-col self-stretch">
            <div className="sm:gap-[27px] gap-[54px] flex flex-1 flex-col items-start">
              <Heading
                size="11xl"
                as="h1"
                className="!font-syne7 !font-semibold !text-gray-900_06"
              >
                Danh sách Spa
              </Heading>
              {shops.map((shop:any,index:number) => <ProductList
                  key={index}
                  title={shop.accountName}
                  buttontext={"XEM CHI TIẾT"}
                  userimage={shop.coverImages}
                  ratingCount={shop.rate}
                  id={shop.usersID}
                />)}
             
            </div>
          </div>
          <Pagination currentPage={page+1} totalPages={totalPage} onPageChange={onPageChange}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpaPage;
