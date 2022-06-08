import { Element } from 'react-scroll';
import Image from "next/image";
import One from "../public/images/1.jpeg";
import Two from "../public/images/2.jpeg";

function projetos(){
    return(
        <Element id="projetos" name="projetos">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                <p className="text-sm uppercase text-gray-400">Portfolio</p>
                <h2 className="text-indigo-900 text-6xl font-bold text-center">Projetos</h2>
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