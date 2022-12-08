import React from 'react'
import Categories from './Categories'
import SliderHome from './Slider'
import './Home.css'
function Home() {
  return (
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
  )
}

export default Home