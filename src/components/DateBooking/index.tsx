import { MouseEventHandler } from "react";
import { Heading } from "./..";
interface Props {
  className?: string;
  time?: string;
  clickEvent?: () => void;
}
export default function DateBooking({ time = "", clickEvent, ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-[15px] flex-wrap cursor-pointer`}
      onClick={clickEvent}
    >
      <Heading
        as="p"
        className="text-[15px] flex items-center justify-center rounded-sm bg-orange-100 px-2.5 py-1 font-semibold"
      >
        {time}
      </Heading>
    </div>
  );
}
