export type RecipeProps = {
  id: number;
  image: string;
  title: string;
  summary: string;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  cheap: boolean;
  extendedIngredients: IngredientsProps[];
  cookingMinutes: number;
  gluttenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  instructions: string;
  healthScore: number;
};

type IngredientsProps = {
  aisle: string;
  amount: string;
  consistency: string;
  image: string;
  name: string;
  unit: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  measures: any;
  id: number;
  consistency: string;
};
