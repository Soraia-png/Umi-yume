
import Todos from '../assets/Imagens/Membros/Quebra_de_bracokkkk.png'
import todes from '../assets/Imagens/Membros/macacoaaa.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Todos} alt="Primeira imagem" />
          </div>
          <div>
            <img src={todes} alt="Segunda imagem" className='min-h-full min-w-full'/>
          </div>
        </Slider>
      </div>
    );
  }
  
  export default Home;