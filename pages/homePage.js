import React from 'react';
import Image from "next/image";
import heroImage from "../public/images/heroImage.jpeg";
import { SiLinkedin } from 'react-icons/si';
import {DiGithubBadge } from 'react-icons/di';

function homePage() {
    return(
        <div>
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
                        Olá, eu sou o <span className="text-indigo-900">Max</span>
                    </h1>
                    <p className="text-left font-normal mb-5 flex-wrap">
                        Web Developer FullStack 👾
                    </p>
                    <div className="flex mx-10">
                        <div className="gap-10 mt-10 mb-10">
                            <a href="https://www.linkedin.com/in/maximiliano-mb/"> 
                                <SiLinkedin className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                            </a>    
                        </div>
                        <div className="gap-10 mt-10 mb-10">
                            <a href="https://github.com/MaximilianoMB">
                                <DiGithubBadge className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                            </a>    
                        </div>
                    </div>    
                    <a  href ="#" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">
                        Veja meu porfolio!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default homePage;