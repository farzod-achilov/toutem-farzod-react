import React from 'react'
import ReactDOM from 'react-dom/client'
import Categories from './components/categories/Categories'
import FeaturedProduct from './components/featuredProduct/FeaturedProduct'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import ImgWithText from './components/imgWithText/ImgWithText'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <main>
    <Hero/>
    <Categories/>
    <ImgWithText/>
    <FeaturedProduct/>
  </main>
  </>

)
