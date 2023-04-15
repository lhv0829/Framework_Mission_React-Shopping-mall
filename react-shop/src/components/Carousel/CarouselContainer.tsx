import CarouselSlide from './CarouselSlide';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselContents } from '../../constants/constants';
const CarouselContainer = () => {
  return(
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} className='carousel-container'>
       {carouselContents.map(slide => <CarouselSlide key={slide.title} title={slide.title} 
        text={slide.text} img={slide.img} imgAlt={slide.imgAlt} to={slide.to}></CarouselSlide>)}
    </Carousel>
  )
};

export default CarouselContainer;