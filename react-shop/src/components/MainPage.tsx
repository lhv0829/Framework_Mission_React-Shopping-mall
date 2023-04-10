import getData from "../assets/data";
import { dataType } from "../constants/constants";
import CarouselContainer from "./CarouselContainer";
import ProductContainer from "./ProductContainer";
import Product from "./ProductContainer";
import { useEffect, useState } from "react";
// import  url  from "../constants/constants"
import { categoryArray, categoryType } from "../constants/constants";

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
  return(
    <section className="main pt-16">
      <CarouselContainer></CarouselContainer>
      {categoryArray.map((category) => <ProductContainer category={category} datas={datas} key={categoryArray.indexOf(category)}></ProductContainer>)}
    </section>
  )
};

export default MainPage;