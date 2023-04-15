import { Link } from "react-router-dom";
import { dataType } from "../../constants/constants";


const ProductCard = ({ item } : {item:dataType}) => {

  return(
    <Link to={`/product/${item.id}`} className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal">
      <figure className="flex h-80 bg-white overflow-hidden">
        <img src={item.image} alt="" className="hover:scale-125 transition-transform duration-300"/>
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700 rounded-b-xl">
        <p className="card-title text-base">{item.title}</p>
        <p className="text-base">{`$${Math.round(item.price)}`}</p>
      </div>
    </Link>
  )
};

export default ProductCard;
