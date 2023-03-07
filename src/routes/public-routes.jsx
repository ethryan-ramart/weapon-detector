import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "../components/customLayout";

import About from "../pages/about/about";
import ObjectDetector from "../pages/camera/objectDetector";
import Home from "../pages/home/home";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detector" element={<ObjectDetector />} />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  );
};

export default PublicRoutes;
