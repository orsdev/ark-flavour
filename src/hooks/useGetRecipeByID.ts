import { fetcher } from "@/config";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export const useGetRecipeByID = (id: string) => {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetcher({
      url: `/${id}/information`,
    }),
    enabled: Boolean(id),
    retry: false,
    staleTime: Infinity,
    onError() {
      navigate('/404')
    }
  });

  return {
    recipe: data,
    isLoading,
  }
}
