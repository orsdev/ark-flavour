import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Details from "@/pages/Details";
import NotFound from "@/pages/NotFound";
import Recipes from "@/pages/Recipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
