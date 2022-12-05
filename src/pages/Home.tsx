import { Header } from "../components/Header";
import Programmer from '../assets/images/programming.gif'
export function Home(){
    return(
        <>
            <Header/>
            <div className="w-full h-[100vh] flex flex-col items-center justify-center">

                <div className="flex flex-row h-[60vh] w-full">

                    <div className="flex flex-col items-center justify-start pt-20 w-[50%] h-[100%]">
                        <p className="text-cgreen text-3xl text-center ">Olá, meu nome é</p>
                        <p className="text-[#fff] text-6xl text-center py-8">Claudio Bezerra</p>
                        <p className="text-cgreen text-3xl text-center pt-4">E sou um desenvolvedor Fullstack</p>
                        <p className="text-cgreen text-3xl text-center pt-4">Sempre tentando melhorar minhas habilidades</p>
                    </div>
                    <div className="w-[50%] h-[100%]">
                        <img src={Programmer} alt="programming"/>
                    </div>
                </div>
    
            </div>
        </>
    )
}