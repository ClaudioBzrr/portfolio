import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Skills } from "./pages/Skills"

interface RouteProps{
    path:string,
    element:JSX.Element
}

export const routes:RouteProps[]=[
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
    }

]