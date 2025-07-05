import { useState } from "react";
import html from "../../public/languages/html.png";
import css from "../../public/languages/css.png";
import js from "../../public/languages/js.png";
import react from "../../public/languages/react.png";
import sql from "../../public/languages/sql.png";
import php from "../../public/languages/php.png";
import node from "../../public/languages/node.png";
import csharp from "../../public/languages/csharp.png";
import Animals from "../../public/projects/MemoryGame.jpeg";
import JMBOARD from "../../public/projects/JMBOARD.jpeg";
import MarmolMoro from "../../public/projects/MarmolMoro.jpeg";

import data from "../../data/JeroData.json";

const languages = [html, css, js, react, sql, php, node, csharp];
const projectsImages = [Animals, JMBOARD, MarmolMoro];

console.log(projectsImages[1]);

const MyProjects = ({ ref }) => {
  const projects = data.proyectos;
  return (
    <article
      ref={ref}
      className="flex flex-col bg-[#111] p-8 w-full lg:px-25 pt-30"
      id="mi-projects"
    >
      <h2 className="text-3xl flex items-center gap-2 font-[700] text-[#00ffaa] border-b-2 pb-1 mb-5 lg:text-5xl lg:pb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-bookmark-check-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
          />
        </svg>
        Mis Proyectos
      </h2>
      <section className="flex flex-col gap-10 w-full lg:flex-row lg:p-20">
        {projects.map((project) => {
          return <Project key={project.titulo} proyecto={project} />;
        })}
      </section>
    </article>
  );
};

const Project = (project) => {
  const { titulo, descripcion, techs, repositorio, deploy } = project.proyecto;

  const [masInfo, setMasInfo] = useState(false);
  const [buttonText, setButtonText] = useState("Descripcion");

  const handleMoreInfo = () => {
    buttonText == "Descripcion"
      ? setButtonText("Ocultar")
      : setButtonText("Descripcion");
    setMasInfo(!masInfo);
  };

  return (
    <div className="w-full flex flex-col bg-[#222] text-white shadow-2xl/5 shadow-[#00ffaa]  rounded-xl transition-all duration-500 ease-in-out lg:h-fit lg:w-[%33] lg:">
      {projectsImages.map((img) => {
        if (img.includes(titulo)) {
          console.log(img, "tiene", titulo, "?", img.includes(titulo));
          return (
            <img
              className="rounded-t-xl w-full object-cover h-40 lg:h-55"
              src={img}
              alt={titulo}
              key={titulo}
            />
          );
        }
      })}
      <div className="flex flex-col rounded-b-xl w-full p-2 gap-2 transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-between">
          <h5 className="flex items-center text-2xl font-[900] w-full break-all lg:min-h-10">
            {titulo}
          </h5>
          <span className="flex gap-4">
            <a href={deploy} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
            </a>
            <a href={repositorio} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-box-seam"
                viewBox="0 0 16 16"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
              </svg>
            </a>
          </span>
        </div>
        <span className="justify-center flex items-center gap-5">
          {techs.map((tech) => {
            return (
              <img
                className="flex w-10 h-10 object-contain"
                src={languages.find((language) => language.includes(tech))}
                alt={tech}
                key={tech}
              />
            );
          })}
        </span>
        <div
          className={`${
            masInfo ? "h-40 overflow-hidden lg:h-30" : "h-0 overflow-hidden"
          } flex-col flex items-center justify-center text-justify transition-all duration-500 ease-in-out`}
        >
          <p>{descripcion}</p>
        </div>
        <button
          onClick={handleMoreInfo}
          className=" cursor-pointer border-t-1 pt-1 self-center w-full text-[#00ffaa] font-[600]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
