import React from 'react'
import './Hero.css'
import profile_img from '../../assets/gaut_cropped.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="" alt="" />
        <h1><span>I'm ,</span> frontend developer based in INDIA.</h1>
        <p>Pursuing a Bachelor of Technology (B.Tech) degree has provided me with a strong foundation in engineering principles and practical skills</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero