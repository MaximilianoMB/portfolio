import { Element } from 'react-scroll';
import Image from "next/image";
import heroImage from "../public/images/heroImage.jpeg";
import { SiLinkedin } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { VscFilePdf } from 'react-icons/vsc';
import { Link } from 'react-scroll';// scroll diferenciado

function homePage() {
    return(
        <Element id="homePage" name="homePage">
            <div className="w-full">
                <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
                    <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block ">
                        <Image 
                        src={heroImage} 
                        alt="heroImage" 
                        layout='fill' 
                        objectFit='cover' 
                        className="rounded-full cursor-pointer hidden md:block"
                        />
                    </div>
                    <div className="flex flex-col md:ml-20 mx-20 mt-10">
                        <h1 className="font-bold text-7xl text-left mb-5">
                            Olá, eu sou o <span className="text-teal-500">Max</span>
                        </h1>
                        <p className="text-left ml-5">
                            Web Developer FullStack 👾
                        </p>
                        <div className="flex sm:ml-4 ml-4 mx-10">
                            <div className="gap-10 mt-10 mb-5">
                                <a href="https://www.linkedin.com/in/maximiliano-mb/"> 
                                    <SiLinkedin className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>    
                            </div>
                            <div className="gap-10 mt-10 mb-5">
                                <a href="https://github.com/MaximilianoMB">
                                    <DiGithubBadge className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>    
                            </div>
                            <div className="gap-10 mt-10 mb-5">
                                <a href="#">
                                    <VscFilePdf className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                                </a>    
                            </div>
                        </div>    
                        <Link activeClass='projetos' to='projetos' smooth={ true } offset={ 50 } duration={ 500 } className="font-semibold text-slate-700 mt-5 pt-5 bg-slate-300 rounded-md w-60 h-16 text-lg hover:bg-slate-900 hover:text-slate-300">
                            Veja meu porfolio!
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default homePage;