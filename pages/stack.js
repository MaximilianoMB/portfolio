import { Element } from "react-scroll";
import { DiJsBadge, DiNodejs, DiPostgresql, DiReact, DiGithubBadge, DiPhotoshop, DiStackoverflow } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";



function stack() {
    return(
        <Element id="stack" name="stack">
            <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
                <p className="text-sm uppercase text-gray-400">
                    Minha Stack
                </p>
                <h1 className="text-indigo-900 text-6xl font-bold text-center">
                    Tecnologias
                </h1>
                {/* Primeiro Bloco */}
                <div className="flex justify-items-start items-center mx-40 gap-10 mt-10 mb-10">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex justify-center items-center">
                            <DiJsBadge className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">JavaScript</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <DiNodejs className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">NodeJS</h2>
                        </div>     
                        <div className="flex justify-center items-center">
                            <DiReact className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">React</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <SiTailwindcss className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">TailwindCss</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <SiNextdotjs className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">NextJS</h2>
                        </div> 
                        <div className="flex justify-center items-center">
                            <DiPostgresql className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">PostgreSQL</h2>
                        </div> 
                    </div>
                </div>
                <h1 className="text-indigo-900 text-6xl font-bold text-center">
                    Ferramentas
                </h1>
                {/* Segundo Bloco */}
                <div className="flex justify-items-start items-center mx-40 gap-10 mt-10">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex justify-center items-center">
                            <DiGithubBadge className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">GitHub</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <SiVisualstudiocode  className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">VS Code</h2>
                        </div>   
                        <div className="flex justify-center items-center">
                            <DiStackoverflow  className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">StackOverflow</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <DiPhotoshop  className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                            <h2 className="text-xl text-indigo-600 font-semibold">PhotoShop</h2>
                        </div>       
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default stack