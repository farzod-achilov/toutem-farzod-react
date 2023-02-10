import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './components/blog/Blog'
import ImgWithText from './components/imgWithText/ImgWithText'
import TextImg from './components/textImg/TextImg'
import Categories from './components/categories/Categories'
import FeaturedProduct, { FeaturedProduct2 } from './components/featuredProduct/FeaturedProduct'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <main>
    <Hero/>
    <Categories/>
    <ImgWithText/>
    <FeaturedProduct/>
    <TextImg/>
    <FeaturedProduct2/>
    <Blog/>
  </main>
  <Footer/>
  </>

)
