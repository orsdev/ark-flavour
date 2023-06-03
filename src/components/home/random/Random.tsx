import { RecipeCard } from "@/components/common";
import { useRandomRecipes } from "@/hooks";
import { RecipeProps } from "@/hooks/type";

export const Random = () => {
  const { randomRecipes } = useRandomRecipes();

  return (
    <div className="mt-[100px] max-w-[900px] mx-auto px-[20px] lg:px-0">
      <h1 className="mb-32 text-center text-6xl cursive text-gray-600">
        Discover Random Recipes
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-[20px] gap-y-[40px]">
        {randomRecipes &&
          randomRecipes?.map((recipe: RecipeProps) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.title}
              image={recipe.image}
              summary={recipe.summary}
            />
          ))}
      </div>
    </div>
  );
};
