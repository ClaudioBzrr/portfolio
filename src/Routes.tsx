import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";


interface routesProps{
    path:string,
    element:JSX.Element
}

export const routes:routesProps[]= [
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
        path:'*',
        element:<Error/>
    }

]

