import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from "html-react-parser";

interface CardProps {
  name: string;
  summary: string;
  image: string;
}

export const RecipeCard: FC<CardProps> = ({ name, summary, image }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full cursor-pointer">
      <LazyLoadImage
        alt={name}
        src={image || ""}
        className="rounded-t-lg object-cover"
      />
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 ">
          {name}
        </h5>
        <p className="mb-4 text-lg text-neutral-600 ">
          {summary && parse(`${summary.substring(0, 260)}...` || "")}
        </p>
      </div>
    </div>
  );
};
