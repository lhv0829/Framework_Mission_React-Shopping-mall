import { dataType } from "../constants/constants";
import BuyModal from "./BuyModal";
import CartItem from "./CartItem";

const CartPage = ({datas} : {datas:dataType[]}) => {
  return(
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="lg:flex justify-between mb-20">
          <div>
            <CartItem item={datas[0]}></CartItem>
          </div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">{`총 : ${datas[0].price}`}</span>
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