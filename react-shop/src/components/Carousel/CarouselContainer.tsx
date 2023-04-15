import digital from '../../assets/img_shop_digital.jpeg'
import grocery from '../../assets/img_shop_grocery.jpeg'
import fashion from '../../assets/img_shop_fashion.jpeg'
import CarouselSlide from './CarouselSlide';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselContents } from '../../constants/constants';
const CarouselContainer = () => {
  return(
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} className='carousel-container'>
       {carouselContents.map(slide => <CarouselSlide key={slide.title} title={slide.title} 
        text={slide.text} img={slide.img} imgAlt={slide.imgAlt} to={slide.to}></CarouselSlide>)}
       {/* <CarouselSlide 
       title="물빠진 청바지!" 
       text='이제 막 도착한 패션 청바지를 구경해보세요.'
       img={fashion}
       imgAlt='패션'
       to='/fashion'
       ></CarouselSlide>
       <CarouselSlide 
       title="신속한 업무처리!" 
       text='다양한 디지털 제품을 둘러보세요.'
       img={digital}
       imgAlt='디지털'
       to='/digital'
       ></CarouselSlide>
       <CarouselSlide 
       title="신선한 식품!" 
       text='농장 직배송으로 더욱 신선한 식료품을 만나보세요.'
       img={grocery}
       imgAlt='식품'
       to='/grocery'
       ></CarouselSlide>   */}
    </Carousel>
  )
};

export default CarouselContainer;