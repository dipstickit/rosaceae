import { Helmet } from "react-helmet";
import FeebackCard from "../../components/Card/FeebackCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Heading } from "../../components";
import { Link } from "react-router-dom";

const feedbackData = [
  {
    title: "Quỳnh Nga",
    datePost: "3 days ago",
    content:
      "Tôi rất hài lòng với dịch vụ của bạn! Đội ngũ làm đẹp của bạn không chỉ chuyên nghiệp mà còn rất tận tâm và thân thiện. Tôi sẽ quay lại đây mỗi khi cần làm đẹp!",
  },
  {
    title: "Quỳnh Nga",
    datePost: "3 days ago",
    content:
      "Tôi rất hài lòng với dịch vụ của bạn! Đội ngũ làm đẹp của bạn không chỉ chuyên nghiệp mà còn rất tận tâm và thân thiện. Tôi sẽ quay lại đây mỗi khi cần làm đẹp!",
  },
  {
    title: "Quỳnh Nga",
    datePost: "3 days ago",
    content:
      "Tôi rất hài lòng với dịch vụ của bạn! Đội ngũ làm đẹp của bạn không chỉ chuyên nghiệp mà còn rất tận tâm và thân thiện. Tôi sẽ quay lại đây mỗi khi cần làm đẹp!",
  },
  {
    title: "Quỳnh Nga",
    datePost: "3 days ago",
    content:
      "Tôi rất hài lòng với dịch vụ của bạn! Đội ngũ làm đẹp của bạn không chỉ chuyên nghiệp mà còn rất tận tâm và thân thiện. Tôi sẽ quay lại đây mỗi khi cần làm đẹp!",
  },
];

export default function SpafeedbackPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header className="ml-[12rem]" />
      <div className="bg-gray-100_08 py-4 flex justify-center items-center px-5 font-bold">
        <Link to="/spadetail" className="text-black pr-2">
          Trang chủ /
        </Link>
        <div className="text-blue-400">Đánh giá</div>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="sm:gap-[31px] gap-[63px] w-[95%] flex flex-col md:w-full md:p-5">
          <div className="gap-[78px] flex flex-col">
            {feedbackData.map((item, index) => (
              <FeebackCard key={index} {...item} />
            ))}
            <div className="h-[232px] flex-1 bg-gray-50_06 shadow-xs" />
          </div>
        </div>
        <div className="container-xs flex flex-col items-center mt-6 md:px-5 mb-[25px]">
          <Heading size="5xl" as="p" className="text-center text-blue-400">
            Hiển thị thêm
          </Heading>
          <div className="h-[2px] w-[20%] bg-blue-400 mt-2" />
        </div>
      </div>
      <Footer />
    </>
  );
}
