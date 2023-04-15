import { useRecoilValue } from "recoil";
import { dataType } from "../../constants/constants";
import BuyModal from "../Modal/BuyModal";
import CartItem from "./CartItem";
import { cartState } from "../../atom/cartState";
import NoCartItem from "./NoCartItem";

const CartPage = ({datas} : {datas:dataType[]}) => {
  const cartItems = useRecoilValue(cartState);
  let total:number = 0;
  for(let i:number = 0; i < cartItems.length; i++){
    total += Math.round(cartItems[i].price) * cartItems[i].amount;
  }
  return(
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {cartItems.length === 0 && <NoCartItem></NoCartItem>}
        <div className="lg:flex justify-between mb-20">
          <div>
            {cartItems.map(item => <CartItem item={item} key={item.id}></CartItem>)}
          </div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">{`총 : $${total}`}</span>
            <label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5">구매하기</label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle"/>
      <BuyModal></BuyModal>
    </section>
  )
};

export default CartPage;