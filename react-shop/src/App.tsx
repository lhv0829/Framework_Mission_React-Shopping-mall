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

function App() {
  const url = 'https://fakestoreapi.com/products';
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(url);
      setDatas(data);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(datas);
  return (
    <>
      <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
      <section className="drawer-content">
        <Router>  
          <Nav></Nav>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/carousel' element={<Carousel></Carousel>}></Route>
            <Route path='/productcard' element={<ProductCard></ProductCard>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </section>
      <DrawerSide/>
    </>
  )
}

export default App
