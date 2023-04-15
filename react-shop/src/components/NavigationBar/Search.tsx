import { useState,useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState } from "../../atom/dataState";
import { dataType } from "../../constants/constants";
import { Link } from "react-router-dom";

const Search = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredDatas, setFilteredDatas] = useState<dataType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const datas = useRecoilValue(dataState);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
    const searchInput = document.querySelector('.js-searchInput') as HTMLInputElement;
    if(isOpen){
      searchInput.classList.add('!opacity-100');
      searchInput.classList.add('translate-y-full');
    } else{
      searchInput.classList.remove('!opacity-100');
      searchInput.classList.remove('translate-y-full');
    }
  };

  const valueChange = (valueStr:string) => {
    setSearchValue(valueStr);
  };

  useEffect(() => {
    console.log(searchValue);
    if(searchValue === "") setFilteredDatas([]);
    else setFilteredDatas(datas.filter(product => {
      const regex = new RegExp(searchValue, 'i');
      return regex.test(product.title);
    }));
    // else setFilteredDatas(datas.filter(product => product.title.includes(searchValue.toLowerCase())))
  },[searchValue])

  useEffect(() => {
    console.log(filteredDatas);
  },[filteredDatas]);



  return (
    <div className="dropdown">
      <button type="button" onClick={toggleSearchBar} className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
      <input type="text" placeholder="검색" onChange={(e) => valueChange(e.target.value)} className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"/>
      {filteredDatas.length > 0 && 
        (<ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600">
          {filteredDatas.map(item => <li key={item.id}><Link to={`/product/${item.id}`} className="text-left js-searchedItem">{item.title}</Link></li>)}
        </ul>)
      }
    </div>
  )
};

export default Search;