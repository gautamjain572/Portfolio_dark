import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/GautamsResume.pdf'
import gitIcon from '../../assets/github-brands-solid.svg'
import linkIcon from '../../assets/linkedin-brands-solid.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile' src={profile_img} alt="" />
      <h1><span>I'm Gautam Jain,</span> frontend developer based in INDIA.</h1>
      <p>Pursuing a Bachelor of Technology (B.Tech) degree has provided me with a strong foundation in engineering principles and practical skills</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a href={resume} target="_blank" rel="noopener noreferrer"><div className="hero-resume">My resume</div></a>
      </div>
      <div className="socails">
        <a href="https://github.com/gautamjain572"><img src={gitIcon} alt="" /></a>
        <a href="https://www.linkedin.com/in/gautamjain572/"><img src={linkIcon} alt="" /></a>
      </div>
    </div>
  )
}

export default Hero