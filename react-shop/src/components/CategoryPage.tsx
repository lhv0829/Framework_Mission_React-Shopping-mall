import { dataType, Category } from "../constants/constants";
import ProductCard from "./ProductCard";

const CategoryPage = ({category, datas}:{category:string, datas:dataType[]}) => {
  const categoryData = datas.filter(item => category === Category[item.category]);
  return(
   <section className="xl:container pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 mx-auto">
    <div className="text-sm breadcrumbs">
      <ul>
        <li>홈</li>
        <li>{category}</li>
      </ul>
    </div>
    <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{category}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll='true'>
        {categoryData.map(item => <ProductCard item={item} key={item.id}></ProductCard>)}
      </div>
    </article>
   </section>
  )
}

export default CategoryPage;