import React from 'react'
import Title from '../components/Title'
import { Typewriter } from 'react-simple-typewriter'
import AboutUs from '../components/AboutUs'
import CardItem from '../components/CardItem'

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

       <Title 
      titlenamefarsi='محصولات ما'
      titlenameEnglish='Our Services'
    />  

    <div className="card-home-wrapper d-flex justify-content-around">
    <CardItem/>
  

    </div>

          <Title 
      titlenamefarsi='با ما بیشتر آشنا شوید'
      titlenameEnglish='Get to know us better.'
      
    />


    </div>


      
    </>
  )
}

export default Home
