import { Helmet } from "react-helmet";
import { Img } from "../../components";
export default function ThumnailPage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Rosaceae</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="w-full bg-white-A700 pt-[107px] md:pt-5">
        {" "}
        <Img
          src="images/img_rectangle_1.png"
          alt="image"
          className="h-[681px] w-full object-cover md:h-auto"
        />{" "}
      </div>{" "}
    </>
  );
}
