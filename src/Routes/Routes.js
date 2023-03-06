import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import ProfessionalSkills from "../components/ProfessionalSkills/ProfessionalSkills";
import Services from "../components/Services/Services";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/professionalSkills',
                element: <ProfessionalSkills></ProfessionalSkills>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default router;