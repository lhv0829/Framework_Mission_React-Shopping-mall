import { dataType } from "../constants/constants";

type ProductCardProps = {
  item:dataType
}

const ProductCard = ({ item } : ProductCardProps) => {

  return(
    <a href="" className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal">
        <figure className="flex h-80 bg-white overflow-hidden">
          <img src={item.image} alt="" />
        </figure>
        <div className="card-body bg-gray-100 dark:bg-gray-700">
          <p className="card-title text-base">{item.title}</p>
          <p className="text-base">{`$${item.price}`}</p>
        </div>
      </a>
  )
};

export default ProductCard;
