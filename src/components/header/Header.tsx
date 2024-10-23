import logo from '../../assets/Imagens/Umi.png'; // trouxe a imagem para o código
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='w-full h-2/6 flex items-center p-4 cursor-custom'>
        <div className='flex h-48 w-48 object-contain'>
          <img src={logo} alt='Logo' className='-left-5' />
        </div>

        <div className='font-levi flex space-x-36 justify-center w-full'>
          <button className="px-8 py-3 min-h-[px-60] font-bold text-white bg-[url('./assets/Imagens/Botao_primario.png')] w-36 text-xl hover:scale-105 focus:grayscale duration-200 ease-out delay-75">
            Em breve...
          </button>

          <Link to="/Members" className="flex px-8 py-3 font-bold text-white bg-[url('./assets/Imagens/Botao_primario.png')] w-36 text-xl hover:scale-105 focus:grayscale duration-200 ease-out delay-75 items-center justify-center">
            <p>Membros</p>
          </Link>

          <button className="px-8 py-3 font-bold text-white bg-[url('./assets/Imagens/Botao_primario.png')] w-36 text-xl hover:scale-105 focus:grayscale duration-200 ease-out delay-75">
            Em breve...
          </button>

          <Link to="/Contato" className="flex px-8 py-3 h-[px-60] font-bold text-white bg-[url('./assets/Imagens/Botao_primario.png')] w-36 text-xl hover:scale-105 focus:grayscale duration-200 ease-out delay-75 items-center justify-center">
            Contato   
          </Link>

          <button className="px-8 py-3 font-bold text-white bg-[url('./assets/Imagens/Botao_primario.png')] w-36 text-xl hover:scale-105 focus:grayscale duration-200 ease-out delay-75">
            Em breve...
          </button>
        </div>
      </header>

      <div className='w-full flex flex-col bg-red-500'>
        {/* Adicione conteúdo aqui, se necessário */}
      </div>
    </>
  );
}

export default Header;
