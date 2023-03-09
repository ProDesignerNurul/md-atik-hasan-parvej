import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import ProfessionalSkills from "../components/ProfessionalSkills/ProfessionalSkills";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Tutorial from "../components/Tutorial/Tutorial";
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
                path: '/tutorial',
                element: <Tutorial></Tutorial>
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
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;