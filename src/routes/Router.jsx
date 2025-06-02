import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing_page from "../pages/Landing_page";
import Admin_auth from "../middlewares/Admin_auth";
import Profile from "../admin/profile/Profile";
import Services from "../admin/services/Services";
import Portfolios from "../admin/portfolios/Portfolios";
import Skills from "../admin/skills/Skills";
import NotFound from "../pages/notFound/NotFound";
import Default from "../admin/Default";
import Login from "../admin/Login/Login";
import Admin_verification from "../middlewares/Admin_verification";


const Router =createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Landing_page ,
            }
        ]
    },
    {
        path : '/admin',
        Component : Admin_auth,
        children :[
            { 
               index : true,
               Component :  Default ,
            },
            { 
               path : 'profile',
               Component : Profile,
            },
            { 
               path : 'services',
               Component : Services,
            },
            { 
               path : 'projects',
               Component : Portfolios,
            },
            { 
               path : 'skills',
               Component : Skills,
            }
        ]
    },
    {
        path : '/admin/:email',
        Component : Admin_verification,
    },
    {
        path : '/admin/verify/:token',
        Component : Login,
    },
    {
        path: '/*',
        Component : NotFound
    }
]) 
export default Router;