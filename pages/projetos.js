import { Element } from 'react-scroll';
import Image from "next/image";
import One from "../public/images/1.jpeg";
import Two from "../public/images/2.jpeg";
import { DiGithubBadge } from 'react-icons/di';
import { BsArrowRightSquareFill } from 'react-icons/bs';


function projetos(){
    return(
        <Element id="projetos" name="projetos">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                <p className="text-sm mt-10 uppercase text-slate-400">Portfolio</p>
                <div className="relative">
                        {/* <div className="absolute filter blur-lg opacity-35 w-32 h-20 left-10 bg-slate-600 rounded-full mix-blend-multiply animate-blob"></div> */}
                        <h1 className="relative mb-10 text-slate-400 text-6xl font-bold text-center">
                            Projetos
                        </h1>
                    </div>
                    
                    {/* Galeria de projetos */}

                    {/* Projeto 1 */}

                <div className="flex mx-40 place-content-center">
                    <div className="md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10">
                        <div className="flex basis-auto rounded w-60 h-60 shadow-xl relative">
                            <Image 
                            src={ One } 
                            alt="one" 
                            layout="fill" 
                            objectFit="cover" 
                            className="p-2 rounded cursor-pointer"/>
                        </div>
                        <aside className="flex mt-10 justify-center sm:w-40 text-center text-slate-900">Neste projeto, utilizei Pupppeteer com NodeJS, para construir um webcrawler que retorna um JSON para o frontend, que utiliza NextJS e TailwindCss</aside>
                        <div className="flex items-center">
                            <div><a href="https://github.com/MaximilianoMB">
                                    <DiGithubBadge className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Código</div>
                            <div><a href="https://github.com/MaximilianoMB">
                                    <BsArrowRightSquareFill  className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Acessar </div>
                        </div>
                    </div>
                 </div>

                {/* Projeto 2 */}

                <div className="flex mx-40 place-content-center">
                    <div className="md:flex sm:flex-col md:flex-row justify-center md:gap-10 sm:pb-10 mt-10">
                        <div className="flex basis-auto rounded w-60 h-60 shadow-xl relative">                      
                            <Image 
                            src={ Two } 
                            alt="two" 
                            layout="fill" 
                            objectFit="cover" 
                            className="p-2 rounded cursor-pointer"/>
                        </div>
                        <aside className="flex  mt-10 justify-center sm:w-40 text-center text-slate-900">Neste projeto, utilizei NodeJS e Express para o backend realizar requisições para uma API de reconhecimento facial.No frontend utilizei alguns pacotes npm e a base com React.O aplicativo tem registro e login de usuário construídos com bcrypt para gerenciar senhas e PostgreSQL para a base de dados.</aside>
                        <div className="flex items-center">
                            <div><a href="https://github.com/MaximilianoMB">
                                    <DiGithubBadge className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Código</div>
                            <div><a href="https://github.com/MaximilianoMB">
                                    <BsArrowRightSquareFill  className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Acessar </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default projetos;