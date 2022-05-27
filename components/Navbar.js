import React from 'react';
import { transition } from '@headlessui/react'; // transição animada entre elementos 
import { Link } from 'react-scroll';// scroll diferenciado

function Navbar() {
    return(
        <div>
            <nav className=' fixed z-20 bg-white w-full'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>

                            {/* seção para o logo */}

                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-bold text-xl cursor-pointer'>
                                    Max<span className='text-blue-600'>M.B.</span>
                                </h1>
                            </div>

                            {/* seção de links */}

                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link activeClass='Home' to='home' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Início</Link> 
                                    <Link activeClass='stack' to='stack' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Stack</Link>
                                    <Link activeClass='projetos' to='projetos' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Projetos</Link>
                                    <Link activeClass='contato' to='contato' smooth={ true } offset={ 50 } duration={ 500 } className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Contato</Link>
                                </div>
                            </div>

                            {/* seção de contato por e-mail */}

                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>
                                    Fale<span className='text-blue-600'>Comigo</span>
                                </h1>
                            </div>
                        </div>

                        {/* até aqui é pra desktop */}

                        {/* começo do código para tela mobile */}

                        s
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar;