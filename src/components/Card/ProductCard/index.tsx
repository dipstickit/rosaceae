import { Heading, Img } from "./../..";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  img: string;
  title: string;
  id: number;
}

export default function ProductCard({ id, title, img, ...props }: Props) {
  const navigate = useNavigate();
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out`}
    >
      <Link to={`/item/${id}`} className="relative w-full h-[400px]">
        <Img
          src={img}
          alt="trang_điểm"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="p-5">
        <Heading size="2xl" as="h3" className="!font-syne13 !text-gray-900_06">
          {title}
        </Heading>
      </div>
    </div>
  );
}
