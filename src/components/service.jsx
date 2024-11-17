import React from 'react'
import './stylesheet/service.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Service1 from './service-1'
import Service4 from './service4'
import Service3 from './service3'
import Service2 from './service2'

const Service = () => {
  return (
    <>
      {/* Logo and branding   */}
      <Link className='links' to='/logo-design'>
        <div class="section">
          <div class="division">
            <div class="image"></div>
            <div class="text">
              <p class="offer">Logo & Branding</p>
              <span class="description">Transform your brand identity with our Design Custom Logo Design service. Our expert designers blend creativity and strategy to craft unique, versatile logos that resonate with your brand's essence. Choose us for a logo that stands out and makes a lasting impression.</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Graphics and Design   */}


      <div class="section">
        <div class="division">
          <div class="image"></div>
          <div class="text">
            <p class="offer">Graphics and Design</p>
            <p class="description">Transform your brand aesthetics with our Graphics & Design service. Our creative experts bring concepts to life through visually striking designs that captivate and resonate. From eye-catching branding materials to engaging digital graphics, we tailor our designs to leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      {/* Book Layout   */}
      <Link className='links' to='/book-layout'>
        <div class="section">
          <div class="division">
            <div class="image"></div>
            <div class="text">
              <p class="offer">Book Layout</p>
              <p class="description">Immerse readers in a visually compelling narrative with our Book Layout service. Our skilled designers meticulously craft layouts that enhance readability and aesthetic appeal, creating an immersive reading experience. From elegant typography to carefully balanced visuals, entrust us to bring your words to life on every page.</p>
            </div>
            <button></button>
          </div>
        </div>
      </Link>

      {/* Web & Mobile Design  */}

      <div class="section">
        <div class="division">
          <div class="image"></div>
          <div class="text">
            <p class="offer">Web & Mobile Design</p>
            <p class="description">Embark on a journey of seamless digital experiences with our Web and Mobile Design service, expertly crafted to include UI/UX. Our designers seamlessly blend functionality and aesthetics, ensuring user-centric designs that elevate your online presence. From responsive websites to captivating mobile interfaces, we prioritize a seamless and intuitive user experience.</p>
          </div>
        </div>
      </div>

      {/* Icon Design  */}

      <Link className='links' to='/icon-design'>
        <div class="section">
          <div class="division">
            <div class="image"></div>
            <div class="text">
              <p class="offer">Icon Design</p>
              <p class="description">Elevate your digital presence with our Custom Icon Design service. Our skilled designers craft distinctive and meaningful icons that enhance user experience and strengthen brand recognition. Whether for apps, websites, or branding, choose us to transform complex ideas into visually compelling icons that leave a lasting impression.</p>
            </div>
          </div>
        </div>
      </Link>
      {/* Art & Illustration  */}
      <Link className='links' to="/art-illustration">
        <div class="section">
          <div class="division">
            <div class="image"></div>
            <div class="text">
              <p class="offer">Art & Illustration</p>
              <p class="description">Immerse your brand in a world of creativity with our Art & Illustration service. Our skilled artists bring ideas to life through captivating visuals, from bespoke illustrations to vibrant artworks. Elevate your storytelling, captivate your audience, and establish a unique brand identity with our personalized and imaginative approach to art and illustration.</p>
            </div>
          </div>
        </div>
      </Link>


     
    </>
  )
}

export default Service
