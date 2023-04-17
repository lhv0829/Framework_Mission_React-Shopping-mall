const StarRating = ({ starRating }: { starRating: number }) => {
  const index = Math.floor(starRating * 2 - 1);
  const inputs = Array.from({ length: 10 }, (_, i) => (
    <input
      type="radio"
      name="rating-10"
      key={i}
      className={`bg-yellow-400 cursor-default mask mask-star-2 mask-half-${
        (i % 2) + 1
      }`}
      checked={index === i ? true: false}
      disabled={true}></input>
  ));

  return(
    <div className="rating rating-half">
      <input type="radio" name="rating-10" className="rating-hidden" />
      {inputs}
      {/* <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
      <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" /> */}
    </div>
  ) ;
};

export default StarRating;