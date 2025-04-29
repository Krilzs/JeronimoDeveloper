
import { useState } from 'react'
import LogoHeader from '../../public/LogoHeader.png'
const Header = () =>{

    const [openMenu,setOpenMenu] = useState(false)
    const [button,setButton] = useState(
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#00ffaa" className="bi bi-list cursor-pointer" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
    )
     
    const handleMenu = ()=>{
        setOpenMenu(!openMenu)
        console.log()
        if(openMenu==true)
            setButton(
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#00ffaa" className="bi bi-list cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>)
        else
            setButton(
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#00ffaa" className="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>)
    }
    
    

    return (
    <header className ={ `flex flex-col bg-[#111] sticky w-full top-0 items-center justify-between transition-all duration-500 ease-in-out lg:flex-row `} >
        <div className={`flex items-center justify-between px-4 w-full bg-[#111] transition-all duration-500 ease-in-out`}>
            <img className='size-20 lg:size-30' src={LogoHeader} alt="Jero Logo" />
            <button onClick={handleMenu} className='lg:hidden'>
                {button}
            </button>
        </div>
        <nav className={`absolute ${openMenu ? `top-19` : `-top-100`}  shadow-lg/50 bg-[#111] items-center transition-all duration-500 w-full h-auto -z-1 lg:z-7  lg:flex lg:items-center lg:w-full lg:h-30 lg:top-0 lg:shadow-none lg:bg-transparent lg:justify-end`} >
            <ul className='flex flex-col w-full gap-3 p-6 text-[#00ffaa]  lg:flex-row lg:text-xl lg:w-fit lg:h-full lg:items-center lg:p-0 lg:gap-10 lg:pr-5 lg:font-[700]'>
                <li className='flex border-b-3 border-[#00ffaa] w-full lg:w-fit lg:border-b-0'>
                    <a className='w-full' href="#sobre-mi" onClick={handleMenu} >Sobre Mi</a>
                </li>
                <li className='flex border-b-3 border-[#00ffaa] w-full lg:w-fit lg:border-b-0 lg:h-full lg:items-center'>
                    <a className='w-full' href="#my-stack" onClick={handleMenu}>My Stack</a>
                </li>
                <li className='flex border-b-3 border-[#00ffaa] w-full lg:w-fit lg:border-b-0 lg:h-full lg:items-center'>
                    <a href='#mi-projects' onClick={handleMenu}>Mis Proyectos</a>
                </li>
                <li className='flex border-b-3 border-[#00ffaa] w-full lg:w-fit lg:border-b-0 lg:h-full lg:items-center'>
                    <a href='#mis-estudios' onClick={handleMenu}>Estudios</a>
                </li>
                <li className='flex border-b-3 border-[#00ffaa] w-full lg:w-fit lg:border-b-0 lg:h-full lg:items-center'>
                    <a href='#CV' onClick={handleMenu}>Mi Curriculum</a>
                </li>
            </ul>
        </nav>
    </header>
    )

}

export default Header