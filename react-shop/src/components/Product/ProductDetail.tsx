import { Link } from "react-router-dom";
import { Category, dataType, putCartType } from "../../constants/constants";
import StarRating from "../StarRating";
import { useState,useEffect } from 'react'
import { useRecoilState } from "recoil";
import { cartState } from "../../atom/cartState";

function convertDataToDataType(data: dataType): putCartType {
  return {
    category: data.category,
    description: data.description,
    id: data.id,
    image: data.image,
    price: data.price,
    rating: {
      rate: data.rating.rate,
      count: data.rating.count
    },
    title: data.title,
    amount: 1
  }
}

const ProductDetail = ({ item }:{item:dataType}) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  
  const handleAddToCart = (clickedItem : dataType) => {
    const addProduct = convertDataToDataType(clickedItem);
    const isItemInCart = cartItems.find(item => item.id === addProduct.id)
    if (isItemInCart) {
      setCartItems(prev => 
        prev.map(item =>
          item.id === addProduct.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...addProduct, amount: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return(
    <section className="xl:container pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 mx-auto">
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>{Category[item.category]}</li>
            <li>{item.title}</li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img src={item.image} alt={item.title} className="object-contain w-full h-72"/>
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {item.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{item.description}</p>
            <div className="flex items-center mt-3">
              <StarRating starRating={item.rating.rate}></StarRating>
              <div className="ml-2">{`${item.rating.rate} / ${item.rating.count} 참여`}</div>
            </div>
            <p className="mt-2 mb-4 text-3xl">{`$${Math.round(item.price)}`}</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>장바구니에 담기</button>
              <Link className="btn btn-outline ml-1" to="/cart">장바구니로 이동</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetail;