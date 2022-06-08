import { Element } from 'react-scroll';
import { GoMail } from 'react-icons/go';

function contato () {
    return(
        <Element id="contato" name="contato">
            <div>
                <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                    <p className="text-sm uppercase text-gray-400">Contatos</p>
                    <h1 className="text-indigo-900 text-6xl font-bold text-center">Fale Comigo!</h1>
                </div>
                <div className="flex justify-center items-center mx-40 gap-10 mt-10 mb-10">
                        <button>
                            <GoMail className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>                 
                        </button>    
                </div>
            </div>
        </Element>
    )
}

export default contato;