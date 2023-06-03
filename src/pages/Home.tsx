import { Hero, Random } from "@/components/home";
import { DefaultLayout } from "@/layouts";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Random />
    </DefaultLayout>
  );
};

export default Home;
