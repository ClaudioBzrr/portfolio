import {Link} from 'react-router-dom'


export function Header(){
    return(
        <header className='w-full h-[10vh] fixed top-0 flex flex-row text-lowWhite text-2xl'>
            <div className='w-[60vw]'>
                <Link className='ml-20' to='/home'>Início</Link>
            </div>
            <ul className='flex flex-1 flex-row justify-evenly'>
                <li>
                    <Link to='/skills'>Habilidades</Link>
                </li>
                <li>
                    <Link to='/projects'>Projetos</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/contact'>Contato</Link>
                </li>
            </ul>
        </header>
    )
}