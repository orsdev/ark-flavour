import { FullSpinner } from "@/components/common";
import { useGetRecipeByID } from "@/hooks";
import { DefaultLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { Header, Ingredients, Instructions } from "@/components/details";

const Details = () => {
  const { id } = useParams();
  const { recipe, isLoading } = useGetRecipeByID(id as string);

  return (
    <DefaultLayout>
      {isLoading && <FullSpinner />}
      {!isLoading && recipe && (
        <div className="px-10 max-w-[1000px] mx-auto">
          <Header
            title={recipe.title}
            image={recipe.image || "/images/no-image.svg"}
            summary={recipe.summary}
            healthScore={recipe?.healthScore}
            readyInMinutes={recipe?.readyInMinutes}
            sourceUrl={recipe?.sourceUrl}
          />
          <Ingredients ingredients={recipe?.extendedIngredients} />
          <Instructions instructions={recipe?.instructions} />
        </div>
      )}
    </DefaultLayout>
  );
};

export default Details;
