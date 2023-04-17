import { useEffect, lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/NavigationBar/Nav'
import Footer from './components/Footer/Footer'
import getData from './assets/data'
import DrawerSide from './components/NavigationBar/DrawerSide'
import { dataType, categoryList } from './constants/constants'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState } from './atom/darkModeState'
import { dataState } from './atom/dataState'
import NotFound from './components/Page/NotFound'
import { cartState } from './atom/cartState'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [datas, setDatas] = useRecoilState(dataState);
  const isDarkMode = useRecoilValue(darkModeState);
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const MainPage = lazy(() => import('./components/Page/MainPage'));
  const ProductDetail = lazy(() => import('./components/Product/ProductDetail'));
  const CategoryPage = lazy(() => import('./components/Page/CategoryPage'));
  const CartPage = lazy(() => import('./components/Cart/CartPage'))
  
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const data = await getData(url);
        setDatas(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
    const currentCartItems = localStorage.getItem('CART_ITEMS') as string;
    setCartItems(JSON.parse(currentCartItems));
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
        <ScrollToTop/>
        <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
        <section className={`drawer-content`}>
            <Nav></Nav>
            <section className='main pt-16'>
              <Suspense fallback={<Loader/>}>
                <Routes>
                  <Route path='/' element={<MainPage datas={datas}></MainPage>}></Route>
                  {datas.map((item:dataType) => <Route path={`/product/${item.id}`} key={item.id} element={<ProductDetail item={item}></ProductDetail>}></Route>)}
                  {categoryList.map((category) => <Route path={`/${category.cat}`} key={category.cat} element={<CategoryPage category={category.title} datas={datas}></CategoryPage>}></Route>)}
                  <Route path='/cart' element={<CartPage></CartPage>}></Route>
                  <Route path='/grocery' element={<NotFound></NotFound>}></Route>
                </Routes>
              </Suspense>
            </section>
            <Footer></Footer>
        </section>
        <DrawerSide/>
      </Router>
  )
}

export default App;
