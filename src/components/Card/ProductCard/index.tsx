import { Heading, Img } from "./../..";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  img: string;
  title: string;
}
export default function ProductCard({ title,img,  ...props }: Props) {

  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <Link to="/spadetail">
        <Img
          src={img}
          alt="trang_điểm"
          className="h-[429px] w-full object-cover md:h-auto"
        />
      </Link>
      <Heading
        size="4xl"
        as="h3"
        className="ml-5 !font-syne13 !text-gray-900_06 md:ml-0"
      >
        {title}
      </Heading>
    </div>
  );
}
