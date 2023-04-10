import { dataType } from "../constants/constants";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import getData from "../assets/data";
import { ProductCategoryEnum, Category } from "../constants/constants";

const ProductContainer = ({category, datas}:{category:string, datas:dataType[]}) => {
  console.log('category:', category);
  console.log('datas:', datas);
  // const categoryData: dataType[] = datas.filter(item => item.category === category);
  // const categoryList = ProductCategoryEnum[category].list;
  // const categoryData: dataType[] = datas.filter(item => categoryList.includes(item.category));
  const matchCategory = (category:string, filterCategory:string):boolean => {
    if((category === `men's clothing` || category === `women's clothing`) && filterCategory === '패션'){
      return true;
    }
    if(category === `electronics` && filterCategory === '디지털'){
      return true;
    }
    if(category === `jewelery` && filterCategory === '액세서리'){
      return true;
    } 
    else return false;
  };
  const categoryData = datas.filter(item => matchCategory(item.category, category)).slice(0,4);
  // console.log('categoryData:', categoryData);
  console.log('categoryData:', categoryData);
  return(
   <section className="xl:container pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 mx-auto">
    <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{category}</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {categoryData.map(item => <ProductCard item={item} key={item.id}></ProductCard>)}
    </div>
   </section>
  )
};

export default ProductContainer;

// export const Category = {
//   "men's clothing": '패션',
//   "women's clothing": '패션',
//   electronics: '디지털',
//   jewelery: '액세서리',
// } as const;
