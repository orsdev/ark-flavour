import { LoadingCard, Pagination, RecipeCard } from "@/components/common";
import { useSearchRecipes } from "@/hooks";
import { RecipeProps } from "@/hooks/type";
import { DefaultLayout } from "@/layouts";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Recipes = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { diet, search } = useAppSelector((state) => state.filter);
  const { recipes, total, isLoading } = useSearchRecipes({
    page,
    ingredients: search,
    diet,
  });

  useEffect(() => {
    if (!search) {
      navigate("/");
    }
  }, [navigate, search]);

  if (recipes && recipes?.length === 0) {
    return <Navigate to="/404" state={{ from: location }} />;
  }

  return (
    <DefaultLayout>
      <div className="px-10 max-w-[1000px] mx-auto py-10 mt-[60px]">
        <h1 className="mb-16 text-left text-6xl cursive text-gray-600">
          Recipes
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-[20px] gap-y-[40px]">
          {/* Loading */}
          {isLoading && <LoadingCard />}

          {/* Recipes */}
          {recipes &&
            recipes?.map((recipe: RecipeProps) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.title}
                image={recipe.image || "/images/no-image.svg"}
                summary={recipe.summary}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="mt-14">
          {recipes && (
            <Pagination
              total={total}
              page={page}
              handlePageClick={(value) => {
                const { selected } = value;

                if (selected >= 0) {
                  setPage(selected + 1);

                  window.scrollTo({
                    top: 100,
                  });
                }
              }}
            />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Recipes;
