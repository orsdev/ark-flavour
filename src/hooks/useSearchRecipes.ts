import { fetcher } from "@/config";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

type UseSearchRecipesProps = {
  page: number,
  ingredients: string;
  diet: string,
}

export const PerPage = 14;

export const useSearchRecipes = ({ page, ingredients, diet }: UseSearchRecipesProps) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["search-recipes", { ingredients, diet, page }],
    queryFn: () => fetcher({
      url: `/complexSearch?includeIngredients=${ingredients}&diet=${diet}&offset=${(page - 1) * PerPage}&number=${PerPage}`,
    }),
    retry: false,
    staleTime: Infinity,
    onError() {
      navigate('/404')
    }
  });

  return {
    recipes: data?.results,
    total: data?.totalResults,
    isLoading,
  }
}
