import { Element } from "react-scroll";
import { DiJsBadge, DiNodejs, DiPostgresql, DiReact, DiGithubBadge, DiPhotoshop, DiStackoverflow } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";



function stack() {
    return(
        <Element id="stack" name="stack">
            <div className="w-full h-auto flex flex-col justify-center items-center">
                {/* Titulos */}
                <div className="my-20 justify-center items-center flex-col flex">    
                    <p className="text-sm uppercase text-slate-400">
                        Minha Stack
                    </p>
                    <div className="relative">
                        {/* <div className="absolute filter blur-lg opacity-35 w-48 h-20 left-20 bg-slate-600 rounded-full mix-blend-multiply animate-blob"></div> */}
                        <h1 className="relative text-slate-400 text-6xl font-bold text-center">
                            Tecnologias
                        </h1>
                    </div>
                </div>    
                    {/* Primeiro Bloco */}
                <div className="flex justify-items-start items-center mx-40 gap-10 mt-3">
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        <div className="flex justify-center items-center">
                            <DiJsBadge className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">JavaScript</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <DiNodejs className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">NodeJS</h2>
                        </div>     
                        <div className="flex justify-center items-center">
                            <DiReact className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">React</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <SiTailwindcss className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">TailwindCss</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <SiNextdotjs className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">NextJS</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <DiPostgresql className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">PostgreSQL</h2>
                        </div> 
                    </div>
                </div> 
                <div className="my-20 justify-center items-center flex-col flex">
                    <div className="relative">
                            {/* <div className="absolute filter blur-lg opacity-35 w-48 h-20 left-20 bg-slate-600 rounded-full mix-blend-multiply animate-blob"></div> */}
                            <h1 className="relative text-slate-400 text-6xl font-bold text-center">
                                Ferramentas
                            </h1>
                    </div>
                </div>
                {/* Segundo Bloco */}
                <div className="flex justify-items-start items-center mx-40 gap-10 mt-3">
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        <div className="flex justify-center items-center">
                            <DiGithubBadge className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">GitHub</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <SiVisualstudiocode  className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">VS Code</h2>
                        </div>   
                        <div className="flex justify-center items-center">
                            <DiStackoverflow  className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">StackOverflow</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <DiPhotoshop  className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-slate-900 font-semibold">PhotoShop</h2>
                        </div>       
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default stack