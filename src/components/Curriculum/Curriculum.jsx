import argentina from "../../public/argentina.png";
import usa from "../../public/usa.png";


const Curriculum = () => {
  return (
    <div className="bg-[#111] w-full flex flex-col p-8 lg:px-25 pt-30" id="CV">
      <h3 className="text-3xl flex items-center gap-2 font-[700] text-[#00ffaa] border-b-2 pb-1 mb-5 lg:text-5xl lg:pb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
        </svg>  
        Mi CV
      </h3>
      <div className="flex font-[800] gap-5">
        <span className="flex flex-col justify-center items-center w-full">
          <img className="h-30 object-contain lg:h-70 " src={argentina} alt="Argentina"/>
          <a href="src/files/Curriculum.pdf" download="JeronimoCoriglianoCV_Es" className="w-full h-10 bg-[#00ffaa] rounded-lg text-center text-black p-2  lg:w-fit">Descargar</a>
        </span>
        <span className="flex flex-col justify-center items-center w-full">
          <img className="h-30 object-contain lg:h-70" src={usa} alt="USA"/>
          <a href="src/files/CurriculumENG.pdf" download="JeronimoCoriglianoCV_En" className="w-full h-10 bg-[#00ffaa] rounded-lg text-center text-black p-2 lg:w-fit">Descargar</a>
        </span>
      </div>
    </div>
  );
};

export default Curriculum;
