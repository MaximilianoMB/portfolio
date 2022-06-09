import { Element } from 'react-scroll';
import { GoMail } from 'react-icons/go';
import { useRouter } from 'next/router'

function contato () {
    const router = useRouter()
    return(
        <Element id="contato" name="contato">
            <div>
                <div className="w-full my-10 h-auto flex flex-col justify-center items-center">
                    <p className="text-sm uppercase text-slate-400">Contatos</p>
                    <div className="relative">
                        {/* <div className="absolute filter blur-lg opacity-35 w-56 h-20 left-12 bg-slate-600 rounded-full mix-blend-multiply animate-blob"></div> */}
                        <h1 className="relative text-slate-400 text-6xl font-bold text-center">
                            Fale Comigo!
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center   items-center mx-40 gap-10 mt-10 mb-10"> 
                    <button className="mb-8" type="button" onClick={() => router.push('mailto:maques.mb@gmail.com')}>
                        <GoMail className="w-10 h-10 bg-slate-700 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>               
                    </button>    
                </div>
            </div>
        </Element>
    )
}

export default contato;