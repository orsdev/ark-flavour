import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  summary: string;
  image: string;
  id: number;
}

export const RecipeCard: FC<CardProps> = ({ id, name, summary, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full cursor-pointer"
      onClick={() => navigate(`/details/${id}`)}
    >
      <LazyLoadImage
        alt={name}
        src={image || ""}
        className="object-cover w-full max-h-[300px]"
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
