const MyStudies = () => {
  return (
    <section className='flex flex-col items-start p-8 bg-[#111] text-white lg:px-25 pt-30' id="mis-estudios">
        <h2 className='text-3xl items-center gap-2 flex font-bold text-center text-[#00ffaa] border-b-2 w-full text-start lg:text-5xl lg:pb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
            Mis Estudios
        </h2>
        <div className='flex flex-col gap-5 mt-5 w-full justify-center items-center'>
            <StudyCard 
                titulo="Tecnico en Programacion" 
                lugar="UTN-FRH" 
                fechaInicio="2023" 
                fechaFin="2024" 
                descripcion="Adquisición de principios de programación, estructuras de datos, algoritmos y desarrollo de software. Sólida base en lenguajes de programación como C++,C#,HTML,CSS,JS,PHP. Desarrollo de habilidades en resolución de problemas lógicos y diseño de sistemas informáticos."
            />
        </div>
    </section>
  );
};


const StudyCard = ({titulo, lugar, fechaInicio, fechaFin, descripcion}) => {
    return (<>
        <div className='shadow-md w-full border-b-1 border-stone-700 pb-2 lg:border-none lg:shadow-none'>
            <h3 className='text-xl font-bold lg:text-3xl'>{titulo}</h3>
            <p className='text-gray-400 lg:text-xl'>{lugar}</p>
            <div className='flex justify-start mt-1 text-sm gap-1 items-center text-gray-300 lg:text-l'>
                <p>{fechaInicio}</p>
                <p>-</p>
                <p>{fechaFin}</p>
            </div>
            <p className='mt-2 text-sm lg:text-xl text-gray-400 lg:w-150'>{descripcion}</p>
        </div>
        
    </>)
}

export default MyStudies;
