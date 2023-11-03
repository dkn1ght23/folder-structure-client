import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
