import { FullSpinner } from "@/components/common";
import { useGetRecipeByID } from "@/hooks";
import { DefaultLayout } from "@/layouts";
import parse from "html-react-parser";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { recipe, isLoading } = useGetRecipeByID(id as string);

  return (
    <DefaultLayout>
      {isLoading && <FullSpinner />}
      {!isLoading && recipe && (
        <div className="px-10 max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mt-[70px]">
            <LazyLoadImage
              src={recipe?.image}
              alt={recipe?.title}
              className="max-h-[800px]"
            />
            <div>
              <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[4rem] leading-[110%] md:leading-[103%]">
                {recipe?.title}
              </h1>
              <div className="text-[1.3rem] mt-4">
                {recipe?.summary && parse(recipe?.summary || "")}
              </div>
              <ul className="w-96 mt-5 space-y-4">
                <li className="w-full flex gap-5 items-center text-xl">
                  <span>Cooking Time:</span>
                  <span className="bg-red-50 p-2 px-4">
                    {recipe?.readyInMinutes} Minutes
                  </span>
                </li>
                <li className="w-full flex gap-5 items-center text-xl">
                  <span>Health Score:</span>
                  <span className="bg-red-50 p-2 px-4">
                    {recipe?.healthScore}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h1 className="my-6 mt-[100px] text-center text-6xl cursive text-gray-600">
            Ingredients
          </h1>
          <div className="flex gap-2 flex-wrap max-w-[700px] justify-center mx-auto mt-12">
            {recipe?.extendedIngredients?.map((ingredient: any) => (
              <span
                className="text-[1.3rem] bg-red-50 p-2 px-4"
                key={ingredient?.id}
              >
                {ingredient?.original}
              </span>
            ))}
          </div>
          {!recipe?.extendedIngredients ||
            (recipe?.extendedIngredients?.length === 0 && (
              <p className="text-[1.4rem] text-center">
                Unfortunately, there are no ingredients listed for this recipe
              </p>
            ))}

          <h1 className="my-6 mt-[100px] text-center text-6xl cursive text-gray-600">
            Intructions
          </h1>
          <div className="text-[1.3rem] px-6">
            {recipe?.instructions && parse(recipe?.instructions)}
          </div>
          {!recipe?.instructions && (
            <p className="text-[1.4rem] text-center">
              Apologies, but the instructions for this recipe are currently
              unavailable.
            </p>
          )}
        </div>
      )}
    </DefaultLayout>
  );
};

export default Details;
