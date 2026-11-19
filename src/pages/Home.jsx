import React from 'react'
import Title from '../components/Title'
import { Typewriter } from 'react-simple-typewriter'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <>
    <header>
      <div className="container">
        <div className="header position-relative">
          <div className="header-content position-absolute">
            <h1>

            <Typewriter
              words={['ORSIG']}
              loop={true}
              delaySpeed={3000}
            cursor={true}
              typeSpeed={400}
              deleteSpeed={70}
              
              />
              </h1>
            <h3>فیلترهای خودرویی و صنعتی اُرسیگ</h3>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      
    <Title 
      titlenamefarsi='درباره ما'
      titlenameEnglish='About Us'
    />

    <AboutUs/>


    </div>


      
    </>
  )
}

export default Home
