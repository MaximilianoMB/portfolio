import { Element } from 'react-scroll';
import Image from "next/image";
import One from "../public/images/1.jpeg";
import Two from "../public/images/2.jpeg";
import { DiGithubBadge } from 'react-icons/di';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';



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

                <div className="flex-row sm:grid sm:grid-cols-6 sm:grid-flow-row sm:mx-20 gap-2 px-3 ">
                        {/* Imagem */}
                        <div className="justify-self-center self-center col-span-2 basis-auto rounded w-full h-auto shadow-xl relative">
                            <Image 
                            src={ One } 
                            alt="one" 
                            layout="responsive" 
                            objectFit="cover" 
                            className="p-2 rounded"/>
                        </div>
                        {/* Botoes */}
                        <div className="flex sm:items-center gap-5 justify-center">
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/MaximilianoMB/projeto-plataforma">
                                    <DiGithubBadge className="w-8 h-8 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Código</div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://projeto-plataforma-lyart.vercel.app/">
                                    <BsArrowRightSquareFill  className="w-8 h-8 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Acessar 
                            </div>
                        </div>
                        {/* Texto */}
                        <p className="col-span-3 mt-10 justify-center sm:self-center  text-center text-slate-900">
                        Esta plataforma foi desenvolvida utilizanto Vite,no frontend React e Tailwind e utilizei também GraphCMS para gerenciar os conteúdos.
                        Serve como base para eventos, cursos e afins pois possui uma área de login ou inscrição e os conteúdos de cada capítulo, aula, professor, etc... são gerenciados pelo GraphCMS.
                        </p>
                        <p className="flex sm:col-span-6 justify-center">
                        <BsThreeDotsVertical  className="w-8 h-8 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/> 
                        </p>
                 </div>

                {/* Projeto 2 */}

                <div className="flex-row sm:grid sm:grid-cols-6 sm:grid-flow-row sm:mx-20  gap-2 mt-10 px-3 ">
                        {/* Imagem */}
                        <div className="justify-self-center self-center col-span-2 basis-auto rounded w-full h-auto shadow-xl relative">                      
                            <Image 
                            src={ Two } 
                            alt="two" 
                            layout="responsive" 
                            objectFit="cover" 
                            className="p-2 rounded"/>
                        </div>
                        {/* botoes */}
                        <div className="flex sm:items-center gap-5 justify-center">
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/MaximilianoMB/rcg-app">
                                    <DiGithubBadge className="w-8 h-8 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Código</div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://rcg-ai.herokuapp.com/">
                                    <BsArrowRightSquareFill  className="w-8 h-8 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>Acessar 
                            </div>
                        </div>
                        {/* Texto */}
                        <p className="col-span-3 mt-10 justify-center sm:self-center  text-center text-slate-900">
                            Neste projeto, utilizei NodeJS e Express para o backend realizar requisições para uma API de reconhecimento facial.No frontend utilizei alguns pacotes npm e a base com React.O aplicativo tem registro e login de usuário construídos com bcrypt para gerenciar senhas e PostgreSQL para a base de dados.
                        </p>
                </div>
            </div>
        </Element>
    )
}

export default projetos;
