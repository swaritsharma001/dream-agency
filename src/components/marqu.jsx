import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Total Gaming",
    username: "@totalgaming93",
    body: "Thumbnail was amazing",
    img: "https://res.cloudinary.com/dfmpb2aii/image/upload/v1749107564/uploads/1fBJqROtDG-download.jpeg.jpg",
  },
  {
    name: "Techno Gamer",
    username: "@technogamer",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://res.cloudinary.com/dfmpb2aii/image/upload/v1749107966/uploads/JzjXzj5ljC-download%20%281%29.jpeg.jpg",
  },
  {
    name: "Mr. Random",
    username: "@mr.random",
    body: "Your site is amazing.",
    img: "https://res.cloudinary.com/dfmpb2aii/image/upload/v1749107977/uploads/qs37qRWvIC-download%20%282%29.jpeg.jpg",
  },
  {
    name: "Gamer fleet",
    username: "@gamer.fleet",
    body: "Video Editing is fuc*** crazy.",
    img: "https://res.cloudinary.com/dfmpb2aii/image/upload/v1749107987/uploads/bXe9WQUcxX-download%20%283%29.jpeg.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, username, body, img}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-red-950/[.1] bg-red-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 bg-black">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-white text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-white text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
      <div className="flex justify-center items-center">
        <a
          href="https://wa.me/916263563464?text=Hi%20Dream%20Agency%2C%20I%20am%20interested%20in%20your%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
        >
          Contact Us on WhatsApp
        </a>

        </div>
    </>
  )
}
