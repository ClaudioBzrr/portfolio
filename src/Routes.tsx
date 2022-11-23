import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";


interface routesProps{
    path:string,
    element:JSX.Element
}

export const routes:routesProps[]= [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/skills',
        element:<Skills/>
    },
    {
        path:'*',
        element:<Error/>
    }

]

