import { dataType } from "../../constants/constants";
import ProductCard from "./ProductCard";
import { Category } from "../../constants/constants";

const ProductContainer = ({category, datas}:{category:string, datas:dataType[]}) => {
  const categoryData = datas.filter(item => category === Category[item.category]).slice(0,4);
  return(
   <section className="xl:container pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 mx-auto">
    <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{category}</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll='true'>
      {categoryData.map(item => <ProductCard item={item} key={item.id}></ProductCard>)}
    </div>
   </section>
  )
};

export default ProductContainer;

