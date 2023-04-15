import { categoryList, dataType } from "../constants/constants";
import CarouselContainer from "./Carousel/CarouselContainer";
import ProductContainer from "./Product/ProductContainer";
import { useEffect, useState } from "react";

const MainPage = ({ datas }: { datas : dataType[] }) => {

  return(
    <>
      <CarouselContainer></CarouselContainer>
      {categoryList.map((category) => <ProductContainer category={category.title} key={category.cat} datas={datas}></ProductContainer>)}
    </>
  )
};

export default MainPage;