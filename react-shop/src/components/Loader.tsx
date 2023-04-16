import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="content-wrap flex justify-center items-center">
      <div className="loader">
        <FadeLoader color="#C63DEE"
          height={15}
          width={5}
          radius={2}
          margin={2}/>
      </div>
    </div>
  )
};

export default Loader;