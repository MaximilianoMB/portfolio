import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // transição animada entre elementos 
import { Link } from 'react-scroll';// scroll diferenciado

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <nav className=' fixed z-20 bg-slate-50 w-full'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>

                            {/* seção para o logo */}

                            <div className='flex justify-center items-center flex-shrink-0 ml-10'>
                                <h1 className='font-bold text-slate-900 text-3xl cursor-pointer'>
                                    Max<span className='text-teal-700'>M.B.</span>
                                </h1>
                            </div>

                            {/* seção de links */}

                            <div className='hidden md:block'>
                                <div className='ml-10 text-xl text-slate-900 font-bold flex items-baseline space-x-4'>
                                    <Link activeClass='Home' to='home' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-slate-300 px-3 py-2 text-md'>Início</Link> 
                                    <Link activeClass='stack' to='stack' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-slate-300 px-3 py-2 text-md'>Stack</Link>
                                    <Link activeClass='projetos' to='projetos' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-slate-300 px-3 py-2 text-md'>Projetos</Link>
                                    <Link activeClass='contato' to='contato' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-slate-300 px-3 py-2 text-md'>Contato</Link>
                                </div>
                            </div>

                            {/* seção de contato por e-mail */}

                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-bold text-slate-900 text-xl cursor-pointer hidden md:block'>
                                    Fale<span className='text-teal-700'>Comigo</span>
                                </h1>
                            </div>
                        </div>

                        {/* até aqui é pra desktop */}

                        {/* começo do código para tela mobile */}

                        <div className="mr- 14 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} 
                            type="button" 
                            className="bg-slate-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white" 
                            aria-controls="mobile-menu" 
                            aria-expanded="false">
                                <span className="sr-olny">
                                    
                                </span>

                                {/* funcionalidade do menu */}

                                {!isOpen ? (<svg 
                                className="block h-6 w-6" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin='round' 
                                strokeWidth="2" 
                                d= "M4 6h16M4 12h16M4 18h16"/></svg>) : (

                                <svg 
                                className="block h-6 w-6" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin='round' 
                                strokeWidth="2" 
                                d= "M6 18L18 6M6 6l12 12"/></svg>)}
                            </button>
                        </div>
                    </div>

                </div>

                {/* div para pequeno mobile*/}
                {/* propriedades de transicao entr tags */}
                <Transition 
                show={isOpen} 
                enter="transition ease-out duration-100 transform" 
                enterFrom="opacity-0 scale-95" 
                enterTo="opacity-100 scale-100" 
                leave="transition ease-in duration-74 transform" 
                leaveFrom="opacity-100 scale-100" 
                leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1">
                                <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Início</Link>
                                <Link href="/stack" activeClass="stack"to="stack" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stack</Link>
                                <Link href="/projetos" activeClass="projetos" to="projetos" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projetos</Link>
                                <Link href="/contato" activeClass="contato" to="contato" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</Link>
                                <Link href="/falecom" activeClass="falecom" to="falecom" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fale<span className="text-black">Comigo</span></Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    )
}

export default Navbar;