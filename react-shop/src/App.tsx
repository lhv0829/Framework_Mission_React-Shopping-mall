import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Product from './components/ProductContainer'
import MainPage from './components/MainPage'
import Carousel from './components/CarouselContainer'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {

  return (
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
  )
}

export default App
