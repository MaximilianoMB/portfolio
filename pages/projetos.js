import { Element } from 'react-scroll';
import Image from "next/image";
import One from "../public/images/1.jpeg";
import Two from "../public/images/2.jpeg";

function projetos(){
    return(
        <Element id="projetos" name="projetos">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                <p className="text-sm uppercase text-slate-400">Portfolio</p>
                <div className="relative">
                        {/* <div className="absolute filter blur-lg opacity-35 w-32 h-20 left-10 bg-slate-600 rounded-full mix-blend-multiply animate-blob"></div> */}
                        <h1 className="relative text-slate-400 text-6xl font-bold text-center">
                            Projetos
                        </h1>
                    </div>
                <div className="md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10">
                    <div className="rounded w-60 h-60 shadow-xl relative">
                        <Image 
                        src={ One } 
                        alt="one" 
                        layout="fill" 
                        objectFit="cover" 
                        className="p-2 rounded cursor-pointer"/>
                    </div>
                </div>
                <div className="md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10">
                    <div className="rounded w-60 h-60 shadow-xl relative">                      
                        <Image 
                        src={ Two } 
                        alt="two" 
                        layout="fill" 
                        objectFit="cover" 
                        className="p-2 rounded cursor-pointer"/>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default projetos;