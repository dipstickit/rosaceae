import { Img, Text, RatingBar } from "./../..";
interface Props {
  className?: string;
  title?: string;
  datePost?: string;
  content?: string;
}
export default function FeebackCard({
  title = "Quỳnh Nga",
  datePost = "3 days ago",
  content = "Tôi rất hài lòng với dịch vụ của bạn! Đội ngũ làm đẹp của bạn không chỉ chuyên nghiệp mà còn rất tận tâm và thân thiện. Tôi sẽ quay lại đây mỗi khi cần làm đẹp!",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center pt-[37px] pb-20 pl-[21px] pr-[17px] md:pb-5 sm:pl-5 sm:py-5 bg-gray-50_06 shadow-xs flex-1`}
    >
      <div className="flex w-full items-start justify-center gap-2 md:flex-col">
        <div className="w-full pr-3">
          <div className="flex items-start gap-3.5 md:flex-col">
            <div className="w-[3%] md:w-full">
              <Img
                src="images/img_logo_google.png"
                alt="quỳnh_nga"
                className="rounded-[50%] w-[40px] h-[40px]"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1.5 pb-10 md:self-stretch sm:pb-5">
              <div className="w-[14%] flex items-center justify-between gap-5 md:w-full">
                <div className="flex">
                  <Text
                    size="2xl"
                    as="p"
                    className="tracking-[0.20px] !font-roboto4 !text-black-900_dd"
                  >
                    {title}
                  </Text>
                </div>
                <RatingBar
                  value={1}
                  isEditable={true}
                  color="#c1c8ce"
                  activeColor="#ffc600"
                  size={14}
                  className="flex justify-between self-start"
                />
              </div>
              <div className="flex">
                <Text
                  size="xl"
                  as="p"
                  className="tracking-[0.20px] !font-roboto4 !text-black-900_89"
                >
                  {datePost}
                </Text>
              </div>
              <Text as="p" className="!font-alata4 !text-blue_gray-900_07">
                {content}
              </Text>
            </div>
          </div>
        </div>
        <Img
          src="images/img_logo_google_red_500_02.svg"
          alt="quỳnh_nga"
          className="w-[24px] h-[24px] md:w-full"
        />
      </div>
    </div>
  );
}
