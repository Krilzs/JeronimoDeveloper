import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Home from '../Home/Home'
import MyStack from '../MyStack/MyStack'
import MyProjects from '../MyProjects/MyProjects'
import MyStudies from '../MyStudies/MyStudies'
import Curriculum from '../Curriculum/Curriculum'
import { useState } from 'react'
const App = () =>{

    const [loading, setLoading] = useState(true)
    
    const handleLoading = () => {
        setLoading(false)
    }
    



    return( 
        <>
            {
                loading && (
                    <div className={`flex flex-col ${ loading == true ? "" : "hidden" } justify-center items-center h-screen bg-[#111] border-b-2 border-[#00ffaa] z-10`}>
                        <svg className="animate-spin h-20 w-20 text-[#00ffaa]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1h11a2.5 2.5 0 1 1-5 0h-6a2.5 2.5 0 0 1-5 0z"></path>
                        </svg>
                        <span>
                            <p className='text-white text-2xl font-bold'>Cargando</p>
                        </span>
                    </div>
                )
            }
            <main className={`${ loading == true ? "hidden" : "" }`}> 
                <Header></Header>
                <Home handleLoad={handleLoading}></Home>
                <AboutMe></AboutMe>
                <MyStack></MyStack>
                <MyProjects></MyProjects>
                <MyStudies></MyStudies>
                <Curriculum></Curriculum>
            </main>
        </>
    ) 
}

export default App