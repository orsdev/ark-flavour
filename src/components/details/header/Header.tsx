import parse from "html-react-parser";
import FacebookIcon from "remixicon-react/FacebookCircleFillIcon";
import TwitterIcon from "remixicon-react/TwitterFillIcon";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FC } from "react";

interface HeaderProps {
  image: string;
  title: string;
  summary: string;
  readyInMinutes: number;
  healthScore: number;
  sourceUrl: string;
}

export const Header: FC<HeaderProps> = ({
  image,
  title,
  summary,
  readyInMinutes,
  healthScore,
  sourceUrl,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-[70px]">
      <LazyLoadImage src={image} alt={title} className="max-h-[800px]" />
      <div>
        <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[4rem] leading-[110%] md:leading-[103%]">
          {title}
        </h1>
        <div className="text-[1.3rem] mt-4">
          {summary && parse(summary || "")}
        </div>
        <ul className="w-96 mt-5 space-y-2">
          <li className="w-full flex gap-5 items-center text-xl">
            <span>Cooking Time:</span>
            <span className="bg-red-50 p-2 px-4">{readyInMinutes} Minutes</span>
          </li>
          <li className="w-full flex gap-5 items-center text-xl">
            <span>Health Score:</span>
            <span className="bg-red-50 p-2 px-4">{healthScore}</span>
          </li>
        </ul>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-xl">Share:</span>
          <a
            href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
              sourceUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size="20px" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              sourceUrl
            )}&text=Check%20out%20this%20delicious%20recipe!
                  `}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size="20px" />
          </a>
        </div>
      </div>
    </div>
  );
};
