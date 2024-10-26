import { useEffect, useRef, useState } from 'react';
import Televisao from '../assets/Imagens/tv.png';
import Transição from '../assets/Imagens/18141e113a852118e42d847482fba5f3.gif';
import Som from "../assets/Imagens/Auto-falante.png";
import RuidoBranco from "../assets/Sons/Ruido branco.wav";
import Botaoverde from "../assets/Imagens/Botao_verde.png";
import Botaoroxo from "../assets/Imagens/Botao_roxo.png";
import Fechar from "../assets/Imagens/close.png";
import Minimizar from "../assets/Imagens/window-minimize.png";
import Maximizar from "../assets/Imagens/maximaze.png";
import SomDesligado from '../assets/Imagens/mutado.png';
import Youtube from '../assets/Imagens/youtube-logo.png';
import Twitch from '../assets/Imagens/icon twitch.png';
import Tiktok from '../assets/Imagens/Tiktok-icon.png';
import Twitter from '../assets/Imagens/x-logo.png';
import ArielSplash from '../assets/Imagens/Membros/Ariel_splashArt.png';
import ArielFig from '../assets/Imagens/Membros/Nyaaaaaaaa.png';
import ArielAudio from '../assets/Sons/Arielsexo.wav'
import AsterSplash from '../assets/Imagens/Membros/Aster_Splash_1.png';
import AsterFig from '../assets/Imagens/Membros/Aster-icon.webp';
import AsterAudio from '../assets/Sons/Aster _Caro Demais_.wav'
import AtlasSplash from '../assets/Imagens/Membros/Atlas_Oceanico_splash.png';
import AtlasFig from '../assets/Imagens/Membros/ANALISE_qualidade_alta.png';
import AtlasAudio from '../assets/Sons/audiomtfoda.wav'
import SoraSplash from '../assets/Imagens/Membros/Sora_Aron_Splash.png';
import SoraFig from '../assets/Imagens/Membros/Tome_Amor_da_Robo.png';
import SoraAudio from '../assets/Sons/Sora-audio.wav';
import YutaSplash from '../assets/Imagens/Membros/Yuta_Peach_Splash.png';
import YutaFig from '../assets/Imagens/Membros/Nyan.png';
import YutaAudio from '../assets/Sons/yuta gay.wav'
import ZoeSplash from '../assets/Imagens/Membros/Zoe_Lee_Splash.png';
import ZoeFig from '../assets/Imagens/Membros/Hehehe_sem_zoom.png';
import ZoeAudio from '../assets/Sons/Zoe Preferia que não tivesse vindo.wav'

const personagens = [
    {
      "nome": "Ariel",
      "altura": "Altura: 1,54",
      "aniversario": "Aniversário 05/02",
      "MBTI": "ENFP",
      "descriçaobreve": "Ex garoto de programa",
      "descrição": "Um raposo realmente gentil, veja como ele pode te divertir essa noite, entregando café quero dizer.",
      "frase": "Depende de quanto me pagar...",
      "foto": ArielSplash,
      "figurinha": ArielFig,
      "audio": ArielAudio,
      "background-color-url": "#cc22db",
      "redeLive": Twitch,
      "youtubelink": "https://www.twitch.tv/ariel_rias",
      "youtubename": "Ariel_Rias",
      "tiktoklink": "https://www.tiktok.com/@ariel0fc?lang=pt-BR",
      "tiktokname": "Aariel0fc",
      "twitterlink": "https://x.com/Ariel0fc",
      "twittername": "Ariel0fc",
    },
    {
      "nome": "Aster Hono",
      "altura": "Altura: 1,85",
      "aniversario": "Aniversário 04/11",
      "MBTI": "ESFJ",
      "descriçaobreve": "Um riquinho com daddy issues",
      "descrição": "Nada menos que a elite, tenha a satisfação de ter a burguesia te servindo invéz do contrário.",
      "frase": "O que você quer dizer com caro demais?",
      "foto": AsterSplash,
      "figurinha": AsterFig,
      "audio": AsterAudio,
      "background-color-url": "#ff4e39",
      "redeLive": Twitch,
      "youtubelink": "https://www.twitch.tv/asterhono",
      "youtubename": "AsterHono",
      "tiktoklink": "https://www.youtube.com/@AsterHono/featured",
      "tiktokname": "AsterHono",
      "twitterlink": "https://x.com/AsterHono",
      "twittername": "AsterHono",
    },
    {
        "nome": "Atlas",
        "altura": "Altura: 1,80",
        "aniversario": "Aniversário 08/06",
        "MBTI": "ENTP",
        "descriçaobreve": "A tragédia e comédia em pessoa",
        "descrição": "Um ator mascarado que se sacrifica pelo teatro? Mais louco que esse não tem!",
        "frase": "Agradeço as palmas",
        "foto": AtlasSplash,
        "figurinha": AtlasFig,
        "audio": AtlasAudio,
        "background-color-url": "#1d3a66",
        "redeLive": Youtube,
        "youtubelink": "https://www.youtube.com/channel/UC1n2gmbLW7sy7D0sGUiqwvA",
        "youtubename": "AtlasOceanico",
        "tiktoklink": "https://www.tiktok.com/@atlas.oceanico",
        "tiktokname": "atlas.oceanico",
        "twitterlink": "https://x.com/AtlasOceanico",
        "twittername": "AtlasOceanico",
    },
    {
        "nome": "Sora Aron",
        "altura": "Altura: 1,73",
        "aniversario": "Aniversário 26/04",
        "MBTI": "ENFJ",
        "descriçaobreve": "Uma robô alienígena",
        "descrição": "Com muitas duvidas para te fazer, te desafio a achar alguem com tanto charme e curiosidade",
        "frase": "Como você se sente sendo um humano?",
        "foto": SoraSplash,
        "figurinha": SoraFig,
        "audio": SoraAudio,
        "background-color-url": "#3f7ab4",
        "redeLive": Twitch,
        "youtubelink": "https://www.twitch.tv/sora_aronm",
        "youtubename": "sora_aronm",
        "tiktoklink": "https://www.tiktok.com/@soraaaron",
        "tiktokname": "soraaaron",
        "twitterlink": "https://x.com/SoraAronOfc",
        "twittername": "SoraAronOfc",
    },
    {
        "nome": "Yuta Peach",
        "altura": "Altura: 1,61",
        "aniversario": "aniversário 02/03",
        "MBTI": "ENFP",
        "descriçaobreve": "Uma gata interdimensional",
        "descrição": "Ela precisa mesmo abrir um daqueles portais com tanto brilho? Não pode buscar meu café andando pra variar?",
        "frase": "Por que você demorou tanto?",
        "foto": YutaSplash,
        "figurinha": YutaFig,
        "audio": YutaAudio,
        "background-color-url": "#a60f28",
        "redeLive": Twitch,
        "youtubelink": "https://www.twitch.tv/yutapeach",
        "youtubename": "yutapeach",
        "tiktoklink": "https://www.tiktok.com/@_yutapeach",
        "tiktokname": "_yutapeach",
        "twitterlink": "https://x.com/_yutapeach",
        "twittername": "_yutapeach",
      },
      {
        "nome": "Zoe Lee",
        "altura": "Altura: 1,76",
        "aniversario": "aniversário 01/09",
        "MBTI": "ISTJ",
        "descriçaobreve": "Meio tubarão e meio cruel",
        "descrição": "Veja nos seus olhos seu passado de mafiosa, ou será que é presente?",
        "frase": "Eu preferia que não tivesse vindo.",
        "foto": ZoeSplash,
        "figurinha": ZoeFig,
        "audio": ZoeAudio,
        "background-color-url": "#3f4069",
        "redeLive": Twitch,
        "youtubelink": "https://www.twitch.tv/leezoeikk",
        "youtubename": "leezoeikk",
        "tiktoklink": "https://www.tiktok.com/@leezoeikk",
        "tiktokname": "leezoeikk",
        "twitterlink": "https://x.com/leezoeikk",
        "twittername": "leezoeikk",
      },
    
  ]

function Members() {

    const [isTvLoaded, setIsTvLoaded] = useState(false);
    const [personagemAtivo, setPersonagemAtivo] = useState(personagens[0]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [somAtivo, setSomAtivo] = useState(true);
    const tvRef = useRef<HTMLImageElement | null>(null);
    const [tvHeight, setTvHeight] = useState(0);
    const [angulo, setAngulo] = useState(0);
    const [transicaoAtiva, setTransicaoAtiva] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const transicaoAudioRef = useRef<HTMLAudioElement | null>(null);

    // Monitorar carregamento da imagem da TV
    useEffect(() => {
        const tvImage = new Image();
        tvImage.src = Televisao;
        tvImage.onload = () => {
            setIsTvLoaded(true);  // Define como carregado quando a imagem é carregada
        };
    }, []);

    useEffect(() => {
        if (tvRef.current && isTvLoaded) {
            setTvHeight(tvRef.current.offsetHeight);
        }
    }, [isTvLoaded]);

    const toggleSom = () => {
        setSomAtivo(!somAtivo);
    };

    const mudarPersonagem = () => {
        setTransicaoAtiva(true);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        if (transicaoAudioRef.current && somAtivo) {
            transicaoAudioRef.current.volume = 0.02;
            transicaoAudioRef.current.play();
        }

        setAngulo((prevAngulo) => prevAngulo + 60);
    
        // Ajustar a transição do personagem após 500ms
        setTimeout(() => {
            setTransicaoAtiva(false);
    
            if (transicaoAudioRef.current) {
                transicaoAudioRef.current.pause();
                transicaoAudioRef.current.currentTime = 0;
            }
            setPersonagemAtivo((prevState) => {
                const proximoIndex = (personagens.indexOf(prevState) + 1) % personagens.length;
                const novoPersonagem = personagens[proximoIndex];
    
                if (audioRef.current && novoPersonagem.audio && somAtivo) {
                    audioRef.current.src = novoPersonagem.audio;
                    audioRef.current.play();
                }
                return novoPersonagem;
            });
        }, 500);
    };
    
    // Ajusta a altura da div com base na altura da imagem da TV
    useEffect(() => {
        if (tvRef.current) {
            setTvHeight(tvRef.current.offsetHeight);
        }
    }, []);

  return (
    <>
        <div id="Matriz" className= "w-full h-4/6 flex px-5 cursor-custom" >

        <audio ref={transicaoAudioRef} src={RuidoBranco} preload="auto" />
        <audio ref={audioRef} preload="auto" />

            {isTvLoaded && (  // Só renderiza após a TV carregar
            <div id="tv" 
                className= "flex w-3/5 bg-contain bg-center relative" 
                style={{ height: tvHeight }}>

                <img src={Televisao} 
                    ref={tvRef}
                    alt='tv' 
                    className='absolute' 
                    style={{ zIndex: 1 }}/>

                <div id='SplashArt' 
                    className="flex w-5/6 pl-1" 
                    style={{ zIndex: 0 }}>
                        
                    {transicaoAtiva ? (
                            // Exibe o GIF durante a transição
                        <img src={Transição} alt='transição' className="w-full h-full" />
                    ) : (
                            // Exibe o personagem normalmente quando a transição não está ativa
                        <img src={personagemAtivo.foto} alt='personagem'/>
                        )}
                </div>

                <div id='botoes' className= "relative -top-16 -left-3 flex flex-col w-1/6 justify-end items-center" style={{ zIndex: 2 }}>

                    <button >
                        <img src={Botaoroxo} alt='botoes' className='h-[120px]'></img>
                    </button>
                    
                    <button 
                        onClick={mudarPersonagem} 
                        style={{ transform: `rotate(${angulo}deg)` }} // Aplica a rotação com base no estado
                        className="transition-transform duration-500"> 
                        <img src={Botaoverde} alt='botoes' className='h-[120px]'></img>
                    </button>

                </div>
            </div>
            )}

            <div id='Janela' className='h-2/5 pl-10 w-1/3'>
                <div id="CinzaJanela" className= "space-y-5 border-4 font-levi flex flex-col bg-gray-400 object-contain p-3 border-t-gray-300 border-l-gray-300 border-r-gray-500 border-b-gray-500">
                    <div id="Cabeçario" className= "bg-[#cc22db] w-full flex drop-shadow-md justify-between items-center" style={{ backgroundColor: personagemAtivo['background-color-url'] }}>
                        <div id="Titulo" className= "space-x-2 items-center flex text-4xl text-white px-2"> 
                            <img src={personagemAtivo.figurinha} alt='figurinha' className='h-12'></img>
                            <h1>{personagemAtivo.nome}</h1> 
                        </div>

                        <div id="Detalhes" className='flex space-x-2 justify-around px-4' >
                            <button className='flex justify-center h-8 w-8 border-4 bg-slate-400 border-t-gray-300 border-l-gray-300 border-r-gray-500 border-b-gray-500 focus:border-t-gray-500 focus:border-l-gray-500 focus:border-r-gray-300 focus:border-b-gray-300'>
                                <img src={Minimizar} alt='min' className='w-4'></img>
                            </button>

                            <button className='h-8 w-8 border-4 bg-slate-400 border-t-gray-300 border-l-gray-300 border-r-gray-500 border-b-gray-500 focus:border-t-gray-500 focus:border-l-gray-500 focus:border-r-gray-300 focus:border-b-gray-300'>
                                <img src={Maximizar} alt='max'></img>
                            </button>

                            <button className='h-8 w-8 border-4 bg-slate-400 border-t-gray-300 border-l-gray-300 border-r-gray-500 border-b-gray-500 focus:border-t-gray-500 focus:border-l-gray-500 focus:border-r-gray-300 focus:border-b-gray-300'>
                                <img src={Fechar} alt='close'></img>
                            </button>

                        </div>

                    </div>

                    <div id="Descrição" className="px-1 text-2xl space-y-5 bg-white font-levi h-4/6 border-2 border-t-gray-500 border-l-gray-500 border-r-gray-300 border-b-gray-300">
                        <p>{personagemAtivo.altura}</p>
                        <p>{personagemAtivo.aniversario}</p>
                        <p>{personagemAtivo.MBTI}</p>
                        <p>{personagemAtivo.descriçaobreve}</p>
                        <p>{personagemAtivo.descrição}</p>
                        <p className='italic text-xl '>{personagemAtivo.frase}</p>

                    </div>

                    <div id="Roda-pé" className="h-1/6 flex" >

                        <button className={somAtivo ? 
                        'p-1.5 border-4 border-t-gray-300 border-l-gray-300 border-r-gray-500 border-b-gray-500' : 
                        'p-1.5 border-4 border-t-gray-500 border-l-gray-500 border-r-gray-300 border-b-gray-300'}
                        ref={buttonRef}
                        onClick={toggleSom}>

                            <img src={somAtivo ? Som : SomDesligado} // Alterna entre as imagens
                            alt="Som" 
                            className="h-7" ></img>

                        </button>

                    </div>
                </div>
                <div id='Redes sociais' className='w-full py-5 space-x-20 flex justify-center text-white text-xl font-levi'>
                    <a href={personagemAtivo.youtubelink} target="_blank" rel="noopener noreferrer"> 
                        <button className='focus:bg-gray-300/50 hover:bg-gray-300/25 focus:contrast-50 w-24 items-center flex-col flex'>
                            <img src={personagemAtivo.redeLive} alt='youtube' className='p-2 h-20 hover:scale-110 duration-300 ease-in-out '></img>
                            <p>@{personagemAtivo.youtubename}</p>
                        </button>
                    </a>
                    <a href={personagemAtivo.tiktoklink} target="_blank" rel="noopener noreferrer">
                        <button className='focus:bg-gray-500/50 hover:bg-gray-500/25 focus:contrast-50 w-24 items-center flex-col flex'>
                            <img src={Tiktok} alt='TTK' className='p-2 h-20 hover:scale-110 duration-300 ease-in-out '></img>
                            <p>@{personagemAtivo.tiktokname}</p>
                        </button>
                    </a>

                    <a href={personagemAtivo.twitterlink} target="_blank" rel="noopener noreferrer">
                        <button className='focus:bg-gray-500/50 hover:bg-gray-500/25 focus:contrast-50 w-24 items-center flex-col flex'>
                            <img src={Twitter} alt='X' className='p-2 h-20 hover:scale-110 duration-300 ease-in-out '></img>
                            <p>@{personagemAtivo.twittername}</p>
                        </button>
                    </a>
                </div>
            </div>

        </div>
    </>
  )
}

export default Members


  