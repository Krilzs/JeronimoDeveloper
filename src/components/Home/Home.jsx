import bVideo from '../../public/bVideo.mp4'
import './fade.css'
const Home = ({handleLoad})=>{

    return(
        <div className='relative flex flex-col items-center overflow-hidden  justify-center w-full h-full  -z-5'>
            <video className='w-full h-screen object-cover ' id='background' onLoadedData={ handleLoad()} autoPlay muted loop>
                <source src={bVideo} type='video/mp4'/>
            </video>
            <div className='absolute flex flex-col items-center justify-center text-white text-5xl bg-transparent rounded-lg p-3 top-[20%] gap-2 lg:top-[25%] lg:w-full lg:h-fit'>
                <span className='flex flex-col gap-2 items-center'>
                    <p className='text-[1.2rem] text-white font-semibold w-full text-center'>Mi nombre es</p>
                    <h1 className='text-[3.5rem] text-[#00ffaa] font-[900] w-full text-center text-shadow-green-300 text-shadow-lg/20'>Jeronimo Fernandez</h1>
                    <p id='position' className=' text-[2rem] text-white  border-[#00ffaa] border-r-5 font-semibold w-fit text-center'>Web Developer</p>
                </span>
            </div>
            <div id='bottom-fade'></div>
        </div>
    )
}

export default Home