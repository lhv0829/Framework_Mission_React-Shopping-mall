import getData from "../assets/data";
import { categoryList, dataType } from "../constants/constants";
import CarouselContainer from "./CarouselContainer";
import ProductContainer from "./ProductContainer";
import Product from "./ProductContainer";
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