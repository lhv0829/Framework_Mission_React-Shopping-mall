import { Link } from "react-router-dom"

type slideType = {
  title:string
  text:string
  img:string
  imgAlt:string
  to:string
}
const CarouselSlide = ({title, text, img, imgAlt, to} : slideType) => {
  return(
    <div className='carousel-slide'>
      <div className='carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10'>
        <h2 className="text-2xl lg:text-4xl font-bold text-white">{title}</h2>
        <p className="my-2 text-white">{text}</p>
        <Link className="btn btn-sm lg:btn-md mt-3" to={to}>바로가기<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
      </div>
      <img src={img} alt={imgAlt}/>
    </div>
  );
};

export default CarouselSlide;