import { Link } from "react-router-dom";
import { categoryList } from "../constants/constants";
import ThemeSwitch from "./ThemeSwitch";
import { useRecoilState } from "recoil";
import { darkModeState } from "../atom/darkModeState";
import CartIcon from "./CartIcon";
import Search from "./Search";

const Nav = () => {
  return (
    <div className={`navbar fixed z-10 shadow-lg dark:bg-neutral bg-white text-neutral-content`}>
      <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
      <div className="flex w-full xl:container xl:m-auto">
        <label htmlFor="side-menu" className="btn btn-square btn-ghost flex-none w-10 sm:w-auto lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={`inline-block w-5 h-5 dark:stroke-current stroke-gray-700`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2"><Link to={'/'} className="dark:text-white text-gray-700 font-bold text-lg btn-ghost cursor-pointer">React Shop</Link></h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          {categoryList.map((category) => <Link to={`/${category.cat}`} key={category.cat} className="btn btn-sm btn-ghost rounded-btn flex items-center font-bold text-gray-700 dark:text-white">{category.title}</Link>)}
        </div>
        <div className="flex items-center px-2">
          <ThemeSwitch></ThemeSwitch>
          <Search></Search>
          <CartIcon></CartIcon>
        </div>
      </div>

    </div>
  )
};

export default Nav;