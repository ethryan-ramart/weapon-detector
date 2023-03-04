import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "../components/customLayout";
import About from "../pages/about/about";
import Home from "../pages/home/home";
const PublicRoutes = () => {

    return (
        <BrowserRouter>
            <CustomLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </CustomLayout>
        </BrowserRouter>
    )
}

export default PublicRoutes;