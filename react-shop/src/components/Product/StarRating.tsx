const StarRating = ({ starRating }: { starRating: number }) => {
  const index = Math.round(starRating * 2) - 1;
  const inputs = Array.from({ length: 10 }, (_, i) => (
    <input
      type="radio"
      name="rating-10"
      key={i}
      className={`bg-yellow-400 mask mask-star-2 mask-half-${
        (i % 2) + 1
      }`}
      checked={index === i ? true: false}
      disabled={true}></input>
  ));

  return <div className="rating rating-half">{inputs}</div>;
};

export default StarRating;