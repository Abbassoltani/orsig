import Title from '../components/Title'
import { Typewriter } from 'react-simple-typewriter'
import AboutUs from '../components/AboutUs'
import CardItem from '../components/CardItem'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'

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

    <div className="row card-home-wrapper d-flex justify-content-around">
    <CardItem/>
  

    </div>

          <Title 
      titlenamefarsi='با ما بیشتر آشنا شوید'
      titlenameEnglish='Get to know us better.'
      
    />
    <div className="video-box position-relative">
    <video controls >
      <source src='/assets/orsigvideo1.mp4' type='video/mp4'/>
      </video>  

        <img
    src="/assets/logo.png"
    className="video-logo"
    alt="ORSIG"
  />

    </div>

              <Title 
      titlenamefarsi='صنایع و کاربردها'
      titlenameEnglish='Industries & Applications.'
      
    />
    <div className="row service-section justify-content-around gap-1">
      <Services/>
 
    </div>

                  <Title 
      titlenamefarsi='ارتباط با ما'd
      titlenameEnglish='Contact Us'
      
    />
    <ContactUs/>


    </div>


      
    </>
  )
}

export default Home
