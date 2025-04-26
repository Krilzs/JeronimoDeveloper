import html from "../../public/languages/html.png"
import css from "../../public/languages/css.png"
import js from "../../public/languages/js.png"
import react from "../../public/languages/react.png"
import sql from "../../public/languages/sql.png"
import php from "../../public/languages/php.png"
import node from "../../public/languages/node.png"
import csharp from "../../public/languages/csharp.png"

const languages=[ html, css, js, react, sql, php, node, csharp]
    

const MyStack = ()=>{
    const stacks=["html","css","js","react","sql","php","node","csharp"]
    return(
        <article id="my-stack" className="flex pt-15 p-8 bg-[#111] gap-5 pt-25 overflow-hidden lg:flex-col">
            <div className="flex font-[700] flex-col w-fit p-5 text-5xl text-[#111] border-3 rounded-lg bg-[#00ffaa] border-[#00ffaa] gap-10 justify-center text-center lg:flex-row lg:w-100 lg:self-center">
                <span className="lg:flex">
                    <p>M</p>
                    <p>Y</p>
                </span>
                <span className="lg:flex">
                    <p>S</p>
                    <p>T</p>
                    <p>A</p>
                    <p>C</p>
                    <p>K</p>
                </span>
            </div>
            <div className="flex flex-wrap w-auto border-b-2 border-t-2 border-[#00ffaa] lg:self-center lg:grid lg:grid-cols-4 lg:w-300 lg:border-none lg:gap-5 ">
               {stacks.map((stack)=>{return(<Language tech={stack} key={stack} />)})}
            </div>
        </article>
    )
}

const Language = ({tech})=>{


    languages.forEach(language => {
        if(language.includes(tech)){
            tech=language
        }
        
    });
    

    return(
        <div className="w-[50%] min-w-15 min-h-30 flex justify-center items-center lg:w-full lg:p-10">
            <img className="p-2 h-auto object-fit" src={tech} alt="C Sharp"/>
        </div>
    )
}


export default MyStack