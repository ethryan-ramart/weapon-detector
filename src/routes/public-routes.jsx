import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "../components/customLayout";
import About from "../pages/about/about";
import Dashboard from "../pages/dashboard/dashboard";
const PublicRoutes = () => {

    return (
        <BrowserRouter>
            <CustomLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </CustomLayout>
        </BrowserRouter>

    )
}

export default PublicRoutes;