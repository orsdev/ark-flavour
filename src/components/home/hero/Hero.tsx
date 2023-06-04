import { Search, SelectBox } from "@/components/common";
import { _updateDiet } from "@/store/slices/filter";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";

const SelectOptions = [
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Dairy-Free", value: "dairyfree" },
  { label: "Gluten-Free", value: "glutenfree" },
];

export const Hero = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { diet, search } = useAppSelector((state) => state.filter);

  return (
    <section className="header-banner h-[550px] w-full bg-yellow-50 bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-left-top px-4">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-700 mx-auto max-w-[500px]">
          Explore our vast collection of recipes from around the world,
          carefully curated to inspire your inner chef and satisfy your taste
          buds.
        </h1>
        <div className="sm:min-w-[320px] max-w-[400px]">
          <Search />
          <div className="mt-3">
            <SelectBox
              name="diet"
              placeholder_text="Select diet( Optional )"
              options={SelectOptions}
              value={diet}
              handleChange={(event) => {
                const target = event.target;
                dispatch(_updateDiet(target.value));
              }}
            />
          </div>
          <div className="flex justify-center mt-4 w-full">
            <button
              className=" bg-red-500 py-3 px-6 rounded-full text-white  ring-red-300 focus:ring-4 transition duration-200 hover:scale-105 transform text-xl inline-block w-full h-[45px]"
              onClick={() => {
                if (search) {
                  navigate("/recipes");
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
