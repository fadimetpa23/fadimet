import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image"; 


function Slideer() {

    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      arrows: false
                
    };
  
    return (

      <>
        <Slider {...settings}>
          <div>
            <Image src={"/images/slider/1.webp"} alt="Slieder 1" width={3000} height={1006} objectFit="cover"/>
          </div>
          <div>
            <Image src={"/images/slider/2.webp"} alt="Slieder 2" width={3000} height={1006} objectFit="cover"/>
          </div>
          <div>
            <Image src={"/images/slider/5.webp"} alt="Slieder 3" width={3000} height={1006} objectFit="cover"/>
          </div>
        </Slider>
    
      </>
    );
}

export default Slideer