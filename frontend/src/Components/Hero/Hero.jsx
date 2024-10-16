import React from 'react'
import './Hero.css'
import profile_img from '../../assets/gaut_cropped.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Gautam Jain ,</span> frontend developer based in INDIA.</h1>
        <p>Pursuing a Bachelor of Technology (B.Tech) degree has provided me with a strong foundation in engineering principles and practical skills</p>
        <div className='hero-action'>
            <div className="hero-conect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero