import {Link} from 'react-router-dom'
import { headerItems } from '../constants/headerItems'


export function Header(){
    return(
        <header className='w-full h-[10vh] fixed top-0 flex flex-row text-lowWhite text-2xl'>
            <div className='w-[60vw]'>
                <Link className='ml-20' to='/home'>Início</Link>
            </div>
            <ul className='flex flex-1 flex-row justify-evenly'>
                {
                    headerItems.map(({name,path}) =>(
                        <li>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}