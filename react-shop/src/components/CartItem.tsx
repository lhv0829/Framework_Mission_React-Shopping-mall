import { Link } from "react-router-dom";
import { dataType } from "../constants/constants";

const CartItem = ({ item }:{item:dataType}) => {
  return(
    <div>
      <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
        <Link to={`/product/${item.id}`}>
          <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img src={item.image} alt={item.title} className="object-contain w-full h-48"/>
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title"><Link to={`/product/${item.id}`}>{item.title}</Link></h2>
            <p className="mt-2 mb-4 text-3xl">{`$${item.price}`}</p>
            <div className="card-actions">
              <div className="btn-group">
                <button className="btn btn-primary">-</button>
                <button className="btn btn-ghost no-animation">0</button>
                <button className="btn btn-primary">+</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default CartItem;