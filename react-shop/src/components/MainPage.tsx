import getData from "../assets/data";
import CarouselContainer from "./CarouselContainer";
import Product from "./ProductContainer";
import { useEffect, useState } from "react";
// import  url  from "../constants/constants"

const MainPage = () => {
  const url = 'https://fakestoreapi.com/products';
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(url);
      setDatas(data);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(datas);
  // const data = async() => {
  //   const data = await getData(url);
  //   return data;
  // };
  // console.log(data);
  
  // console.log(data);
  // console.log(`MainPage내 ${data}`);
  // console.log(typeof data);
  // console.log(typeof data[0]);
  return(
    <section className="main pt-16">
      <CarouselContainer></CarouselContainer>
      <Product></Product>
    </section>
  )
};

export default MainPage;