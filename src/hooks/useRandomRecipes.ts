import { fetcher } from "@/config";
import { useQuery } from "react-query";

export const useRandomRecipes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["random-recipes"],
    queryFn: () => fetcher({
      url: `/random?number=9`,
    }),
    retry: false,
    staleTime: Infinity
  });

  return {
    randomRecipes: data?.recipes || [],
    isLoading,
  }
}
