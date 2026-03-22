
import { twMerge } from "tailwind-merge";
import Marquee from "../components/marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-40 w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/10 bg-[linear-gradient(to_bottom,rgba(18,23,37,0.9),rgba(11,13,18,0.9))] hover:bg-neutral-300 hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-3xl bg-white/10 h-10 w-10"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space ">
      <h2 className="text-heading text-[#e6e8ee]">Intro to my peers</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-linear-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-linear-to-l from-primary"></div>
      </div>
    </div>
  );
}