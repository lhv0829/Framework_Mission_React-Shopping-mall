import Cart from "./Cart";
import LinkButton from "./LinkButton";
import ModeSwitch from "./ModeSwitch";
const Nav = () => {
  return (
    <div className="navbar fixed z-10 shadow-lg light:bg-white bg-neutral text-neutral-content">
      <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
      <div className="flex w-full xl:container xl:m-auto">
        <label htmlFor="side-menu" className="btn btn-square flex-none w-10 sm:w-auto lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2"><a className="text-white font-bold text-lg btn-ghost cursor-pointer">React Shop</a></h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <LinkButton href="">패션</LinkButton>
          <LinkButton href="">액세서리</LinkButton>
          <LinkButton href="">디지털</LinkButton>
          {/* <a href="" className="btn btn-sm rounded-btn flex items-center font-bold">패션</a> */}
          {/* <a href="" className="btn btn-sm rounded-btn flex items-center font-bold">액세서리</a>
          <a href="" className="btn btn-sm rounded-btn flex items-center font-bold">디지털</a> */}
        </div>
        <div className="flex items-center px-2">
          <label htmlFor="" className="swap swap-rotate mr-2 sm:mr-4">
            <input type="checkbox" className="js-theme"/>
            <ModeSwitch></ModeSwitch>
          </label>
          <div className="dropdown">
            <button type="button" className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            <input type="text" placeholder="검색" className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput" value=""/>
            <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600"></ul>
          </div>
          <Cart></Cart>
        </div>
      </div>

    </div>
  )
};

export default Nav;