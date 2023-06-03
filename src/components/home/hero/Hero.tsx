import { Search } from "@/components/common";

export const Hero = () => {
  return (
    <section className="header-banner h-[550px] w-full bg-yellow-50 bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-left-top px-4">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-700 mx-auto max-w-[500px]">
          Explore our vast collection of recipes from around the world,
          carefully curated to inspire your inner chef and satisfy your taste
          buds.
        </h1>

        <Search />
      </div>
    </section>
  );
};
