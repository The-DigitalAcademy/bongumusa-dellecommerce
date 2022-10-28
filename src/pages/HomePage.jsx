import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

function HomePage() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default HomePage
