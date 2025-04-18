import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
const HeroSection = () => {
  return (
    <main className='hero-section main'>
    <div className="container grid grid-two-cols">
        <div className="hero-content">
            <h1 className="heading-xl">
                Explore theWorld, One Country at a Time.
            </h1>
            <p className='paragraph'>
                Dicover the history , culture, and beauty of every nation,
                Search and filter through countries to find the details you want.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight/>
            </button>
            </div>
            <div className="hero-image">
                <img className='banner-image' src="/images/world.png" alt="world beauty" />
            </div>
        
    </div>
</main>
  )
}

export default HeroSection