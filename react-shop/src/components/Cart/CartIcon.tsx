import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../../atom/cartState";

const CartIcon = () => {
  const cartItems = useRecoilValue(cartState);
  let cartItemCount:number =0;
  for(let i:number = 0; i < cartItems.length; i++){
    cartItemCount += cartItems[i].amount;
  } 
  
  return(
    <Link to="/cart" className="btn w-10 sm:w-12 ml-1 btn-ghost">
      <span className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">{cartItemCount}</span>
      </span>
    </Link>
  )
};

export default CartIcon;