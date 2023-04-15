import { Link } from "react-router-dom";
import { putCartType } from "../../constants/constants";
import { useEffect, useState } from 'react'
import { useRecoilState } from "recoil";
import { cartState } from "../../atom/cartState";

const CartItem = ({ item }:{item:putCartType}) => {
  const [cartItems, setCartItems] = useRecoilState<putCartType[]>(cartState);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleDecrement = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      ).filter(item => item.amount > 0)
    );
  };

  const handleIncrement = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      ));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item => item.amount > 0)));
  }, [cartItems]);

  return(
    <div>
      <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
        <Link to={`/product/${item.id}`}>
          <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img src={item.image} alt={item.title} className="object-contain w-full h-48"/>
          </figure>
        </Link>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">
            <Link to={`/product/${item.id}`} className="link link-hover">{item.title}</Link>
          </h2>
          <p className="mt-2 mb-4 text-3xl">{`$${Math.round(item.price)}`}</p>
          <div className="card-actions">
            <div className="btn-group">
              <button className="btn btn-primary" onClick={() => handleDecrement(item.id)}>-</button>
              <button className="btn btn-ghost no-animation">{item.amount}</button>
              <button className="btn btn-primary" onClick={() => handleIncrement(item.id)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;