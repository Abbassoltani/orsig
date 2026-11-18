import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <>
    <header className='container'>

        <div className="header position-relative">

        </div>
    
            <div className="header-content ">
                <h1>
                <Typewriter
                    words={["ORSIG"]}
                    delaySpeed={3000}
                    loop={true}
                    deleteSpeed={70}
                    typeSpeed={40}
                    cursor={true}

                />

                </h1>
                <h3>فیلترهای خودرویی و صنعتی اُرسیگ</h3>
            </div>

  
    </header>

     
    </>
  )
}

export default Home
