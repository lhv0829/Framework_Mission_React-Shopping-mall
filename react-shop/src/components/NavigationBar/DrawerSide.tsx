import { Link } from "react-router-dom";
import { categoryList } from "../../constants/constants";

const DrawerSide = () => {
  
  return(
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {categoryList.map(category => <li><Link to={`/${category.cat}`} key={category.cat} className="!text-gray-700 active:!text-white dark:!text-white">{category.title}</Link></li>)}
      </ul>
    </div>
  )
};

export default DrawerSide;
