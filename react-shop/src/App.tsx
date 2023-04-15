import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/NavigationBar/Nav'
import MainPage from './components/Page/MainPage'
import Footer from './components/Footer/Footer'
import getData from './assets/data'
import DrawerSide from './components/NavigationBar/DrawerSide'
import ProductDetail from './components/Product/ProductDetail'
import { dataType, categoryList } from './constants/constants'
import CategoryPage from './components/Page/CategoryPage'
import CartPage from './components/Cart/CartPage'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState } from './atom/darkModeState'
import { dataState } from './atom/dataState'
import NotFound from './components/Page/NotFound'

function App() {
  const [datas, setDatas] = useRecoilState(dataState);
  const isDarkMode = useRecoilValue(darkModeState);
  
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    const fetchData = async () => {
      const data = await getData(url);
      setDatas(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLHtmlElement;
    if (isDarkMode) {
      html.setAttribute("data-theme", "dark");
      html.classList.add('dark');
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove('dark');
    } 
  }, [isDarkMode]);

  return (
      <Router>
        <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
        <section className={`drawer-content`}>
            <Nav></Nav>
            <section className='main pt-16'>
              <Routes>
                <Route path='/' element={<MainPage datas={datas}></MainPage>}></Route>
                {datas.map((item:dataType) => <Route path={`/product/${item.id}`} key={item.id} element={<ProductDetail item={item}></ProductDetail>}></Route>)}
                {categoryList.map((category) => <Route path={`/${category.cat}`} key={category.cat} element={<CategoryPage category={category.title} datas={datas}></CategoryPage>}></Route>)}
                <Route path='/cart' element={<CartPage datas={datas}></CartPage>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
            </section>
            <Footer></Footer>
        </section>
        <DrawerSide/>
      </Router>
  )
}

export default App;
