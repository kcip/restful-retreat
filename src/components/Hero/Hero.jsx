import React from 'react'
import { Fragment } from 'react'
import './hero.scss'
import backgroundImage from '../../assets/images/hero.jpeg'
function Hero() {
  return (
    <Fragment>
      <div className="hero__container">
        <picture className="hero__image"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
        </picture>
      </div>
      <div className="hero__callout">
        <h2 className="hero__callout--text">something will go here eventually</h2>
      </div>
    </Fragment>

  )
}

export default Hero;