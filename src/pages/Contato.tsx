import Youtube from '../assets/Imagens/youtube-logo.png'
import Tiktok from '../assets/Imagens/Tiktok-icon.png'
import Twitter from '../assets/Imagens/x-logo.png'
import Instagram from '../assets/Imagens/Instagram-logo.png'
import Discord from '../assets/Imagens/pngwing.com.png'


function Contato() {
    return(
        <>
            <div id="Matriz" className= "flex-col w-full h-4/6 space-y-10 cursor-custom" >

                <div id="Linha1" className="flex space-x-10 w-full h-1/2 justify-center">
                    <div id='Instagram' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                Instagram
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://www.instagram.com/umiyumeoficial/' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Instagram} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                                Conheça melhor nossos membros e nosso Maid Café
                            </div>

                        </div>

                    </div>

                    <div id='Tiktok' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                Tik tok
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://www.tiktok.com/@umiyume' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Tiktok} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                                Veja alguns clipes e graças do nosso grupo
                            </div>

                        </div>

                    </div>

                    <div id='Discord' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                Servidor Umi Yume
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://discord.gg/5kdnYwSvfU' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Discord} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                                Interaja com a nossa comunidade e talvez até as proprias vtubers
                            </div>

                        </div>

                    </div>
                </div>
                
                <div id="Linha1" className="flex space-x-10 w-full h-1/2 justify-center">
                <div id='X' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                X
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://x.com/UMIYumeOficial' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Twitter} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                               Veja nossas novidades e nosso cronograma de lives
                            </div>

                        </div>

                    </div>

                    <div id='Youtube' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                Youtube
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Youtube} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                                Ouça nossos covers e musicas autorais
                            </div>

                        </div>

                    </div>

                    <div id='DiscordNew' className="h-full w-1/4 space-y-5 border-4 font-levi flex flex-col bg-purple-900 object-contain p-3 border-t-pink-400 border-l-pink-400 border-r-pink-600  border-b-pink-600">
                        <div id='Cabeçario' className="bg-fuchsia-800 flex flex-row drop-shadow">
                            <div id="Titulo" className="font-levi space-x-2 items-center flex text-4xl text-white px-2">
                                Servidor New Stage
                            </div>

                        </div>
                        <div id="Descrição" className="flex h-32 flex-row ">
                            <a href= 'https://discord.gg/mhC4BaDaq3' target="_blank" rel="noopener noreferrer">
                                <button id="Icone" className="hover:scale-105 duration-300">
                                    <img src={Discord} alt="Instagram" className="max-h-32 max-w-32"/>
                                </button>
                            </a>
                            <div id="Imagem" className="flex text-white text-2xl p-3">
                                Servidor de dublagem de alguns colegas que nos apoiaram e ajudaram bastante
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Contato