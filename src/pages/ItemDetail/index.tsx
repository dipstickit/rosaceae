// import { Helmet } from "react-helmet";
// import {
//   Footer,
//   Header,
//   Heading,
//   Img,
//   RatingBar,
//   Text,
// } from "../../components";
// import productService from "../../api/product.api";
// import { useEffect, useState } from "react";
// import { Item } from "../../types/Item.model";
// import { useParams } from "react-router-dom";
// import ItemDetailComponent from "../../components/Card/ItemDetail";
// import ItemDescrip from "../../components/Card/ItemFeedback";

// export default function ItemDetail() {
//   const params = useParams();
//   const id: any = params.id;

//   const [item, setItem] = useState<Item | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchItemById = async (id: number) => {
//     try {
//       const response = await productService.getItemById(id);
//       console.log("Response headers:", response.headers);
//       console.log("Response data:", response.data);
//       setItem(response.data);
//     } catch (error) {
//       setError((error as Error).message);
//       console.error("Error fetching item:", (error as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItemById(id);
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Rosaceae</title>
//         <meta
//           name="description"
//           content="Web site created using create-react-app"
//         />
//       </Helmet>
//       <div className="w-full bg-white">
//         <Header />
//         <div className="mt-20 flex flex-col items-center">
//           <div className="w-11/12 flex flex-col items-start md:w-full md:px-5">
//             <Heading
//               size="8xl"
//               as="h1"
//               className="!font-opensans !font-bold !text-gray-900"
//             >
//               Chi tiết dịch vụ
//             </Heading>
//             <div className="w-full mt-10 flex flex-col items-start">
//               <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
//                 <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
//                   {item && (
//                     <ItemDetailComponent
//                       key={item.itemId}
//                       coverImg={item.itemImages[0].imageUrl}
//                       name={item.itemName}
//                       itemPrice={item.itemPrice}
//                       discount={item.discount}
//                       itemType={item.itemType.itemTypeName}
//                       ratingCount={item.itemRate}
//                       className=""
//                     />
//                   )}
//                 </div>
//                 <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
//                   {item && (
//                     <ItemDescrip
//                       key={item.itemId}
//                       itemDescription={item.itemDescription}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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

export default function ItemDetail() {
  const params = useParams();
  const id: any = params.id;

  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
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
          <div className="w-11/12 flex flex-col items-start md:w-full md:px-5">
            <Heading
              size="8xl"
              as="h1"
              className="!font-opensans !font-bold !text-gray-900"
            >
              Chi tiết dịch vụ
            </Heading>
            <div className="w-full mt-10 flex flex-col items-start">
              <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:flex-1 p-6 bg-white rounded-lg shadow-md md:mr-4">
                  {item && (
                    <ItemDetailComponent
                      key={item.itemId}
                      coverImg={item.itemImages[0].imageUrl}
                      name={item.itemName}
                      itemPrice={item.itemPrice}
                      discount={item.discount}
                      itemType={item.itemType.itemTypeName}
                      ratingCount={item.itemRate}
                      className=""
                    />
                  )}
                </div>
                <div className="md:flex-1 p-6 bg-white rounded-lg shadow-md">
                  {item && (
                    <ItemDescrip
                      key={item.itemId}
                      itemDescription={item.itemDescription}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

