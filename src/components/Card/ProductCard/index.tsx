import { Heading, Img } from "./../..";
interface Props {
  className?: string;
}

export default function ProductCard({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <Img
        src="images/img_rectangle_6003.png"
        alt="trang_điểm"
        className="h-[429px] w-full object-cover md:h-auto"
      />
      <Heading
        size="4xl"
        as="h3"
        className="ml-5 !font-syne13 !text-gray-900_06 md:ml-0"
      >
        Trang điểm basic
      </Heading>
    </div>
  );
}

// import React from "react";
// import { Heading, Img } from "./..";

// interface Props {
//   className?: string;
//   title: string; // Thêm prop title với kiểu string
// }

// export default function ProductCard({ title, ...props }: Props) { // Truyền title vào Props
//   return (
//     <div {...props} className={`${props.className} flex flex-col w-full`}>
//       <Img
//         src="images/img_rectangle_6003.png"
//         alt="trang_điểm"
//         className="h-[429px] w-full object-cover md:h-auto"
//       />
//       <Heading
//         size="4xl"
//         as="h3"
//         className="ml-5 !font-syne13 !text-gray-900_06 md:ml-0"
//       >
//         {title} {/* Sử dụng prop title thay vì tiêu đề cứng */}
//       </Heading>
//     </div>
//   );
// }
