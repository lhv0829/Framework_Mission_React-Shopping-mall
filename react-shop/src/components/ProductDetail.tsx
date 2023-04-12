import { Category, dataType } from "../constants/constants";
import StarRating from "./StarRating";

const ProductDetail = ({ item }:{item:dataType}) => {
  console.log(item);
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
            <p className="mt-2 mb-4 text-3xl">{`$${item.price}`}</p>
            <div className="card-actions">
              <button className="btn btn-primary">장바구니에 담기</button>
              <a className="btn btn-outline ml-1" href="/cart">장바구니로 이동</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetail;