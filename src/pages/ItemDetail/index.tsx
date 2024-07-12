import { Helmet } from "react-helmet";
import {
  Footer,
  Header,
  Heading,
  Img,
  RatingBar,
  Text,
} from "../../components";
import productService from "../../api/product.api";
import { useEffect, useState } from "react";
import { Item } from "../../types/Item.model";
import { useParams } from "react-router-dom";
import ItemDetailComponent from "../../components/Card/ItemDetail";
import ItemDescrip from "../../components/Card/ItemFeedback";
import ProductCardService from "../../components/Card/ProductCardService";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { toast } from "react-toastify";

export default function ItemDetail() {
  const params = useParams();
  const id: any = params.id;

  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [listProducts, setListProducts] = useState<Item[]>([]);
  const dispatch = useDispatch();

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const fetchItemById = async (id: number) => {
    try {
      const response = await productService.getItemById(id);
      console.log("Response headers:", response.headers);
      console.log("Response data:", response.data);
      setItem(response.data);
    } catch (error) {
      setError((error as Error).message);
      console.error("Error fetching item:", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchItem();
    fetchItemById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error}
      </div>
    );
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
      <div className="w-full bg-white">
        <Header />
        <div className="mt-20 flex flex-col items-center">
          <div className="w-11/12 flex flex-col items-start md:w-4/5 md:px-5">
            <Heading
              size="8xl"
              as="h1"
              className="!font-opensans !font-bold !text-gray-900 mb-10"
            >
              Chi tiết dịch vụ
            </Heading>
            <div className="w-full flex flex-col md:flex-row items-start gap-8">
              <div className="md:flex-1 p-6 bg-white rounded-lg shadow-lg">
                {item && (
                  <div className="flex flex-col items-start">
                    <img
                      src={item.itemImages[0].imageUrl}
                      alt={item.itemName}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {item.itemName}
                    </h2>
                    <p className="mt-2 text-2xl text-gray-700">
                      {formatPrice(item.itemPrice)}
                    </p>
                    <p className="mt-2 text-xl text-orange-500">
                      {item.discount}% Off
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                      {item.itemDescription}
                    </p>
                  </div>
                )}
              </div>

              <div className="w-full p-6 bg-white rounded-lg shadow-lg">
                {item && (
                  <ItemDescrip
                    key={item.itemId}
                    itemDescription={item.itemDescription}
                  />
                )}
              </div>
            </div>
            <div className="mt-16 w-full">
              <Heading
                size="8xl"
                as="h2"
                className="!font-opensans !font-bold !text-gray-800 mb-8 text-center"
              >
                Các dịch vụ khác
              </Heading>
              <div className="flex overflow-x-auto space-x-4 mt-4 w-full mb-10">
                {listProducts.slice(0, 4).map((item) => (
                  <ProductCardService
                    key={item.itemId}
                    itemImages={item.itemImages}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    discount={item.discount}
                    itemId={item.itemId}
                    className="min-w-[200px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
