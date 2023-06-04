import { FC } from "react";

interface IngredientsProps {
  ingredients: { id: number; original: string }[];
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div>
      <h1 className="my-6 mt-[100px] text-center text-6xl cursive text-gray-600">
        Ingredients
      </h1>
      <div className="flex gap-2 flex-wrap max-w-[700px] justify-center mx-auto mt-12">
        {ingredients &&
          ingredients?.map((ingredient) => (
            <span
              className="text-[1.3rem] bg-red-50 p-2 px-4"
              key={ingredient?.id}
            >
              {ingredient?.original}
            </span>
          ))}
      </div>
      {!ingredients ||
        (ingredients?.length === 0 && (
          <p className="text-[1.4rem] text-center">
            Unfortunately, there are no ingredients listed for this recipe
          </p>
        ))}
    </div>
  );
};
