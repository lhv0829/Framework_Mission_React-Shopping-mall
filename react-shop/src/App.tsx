import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Product from './components/ProductContainer'
import MainPage from './components/MainPage'
import Carousel from './components/CarouselContainer'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import getData from './assets/data'
import DrawerSide from './components/DrawerSide'
import ProductDetail from './components/ProductDetail'
import { dataType, categoryList } from './constants/constants'
import CategoryPage from './components/CategoryPage'
import CartPage from './components/CartPage'

function App() {
  const url = 'https://fakestoreapi.com/products';
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(url);
      setDatas(data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
      <section className="drawer-content">
          <Nav></Nav>
          <section className='main pt-16'>
            <Routes>
              <Route path='/' element={<MainPage datas={datas}></MainPage>}></Route>
              {datas.map((item:dataType) => <Route path={`/product/${item.id}`} key={item.id} element={<ProductDetail item={item}></ProductDetail>}></Route>)}
              {categoryList.map((category) => <Route path={`/${category.cat}`} key={category.cat} element={<CategoryPage category={category.title} datas={datas}></CategoryPage>}></Route>)}
              <Route path='/cart' element={<CartPage datas={datas}></CartPage>}></Route>
            </Routes>
          </section>
          <Footer></Footer>
      </section>
      <DrawerSide/>
    </Router>
  )
}

export default App;
