import React from 'react'

function Title({titlenamefarsi , titlenameEnglish }) {
  return (
    <>
    <div className="title-banner d-flex w-100 justify-content-center ">
        <img src="../../public/assets/bordertitle-right.png" alt="" />
        <div className="title-content text-center">
            <h3>{titlenamefarsi}</h3>
            <h4 className='text-muted fs-6'>{titlenameEnglish}</h4>
        </div>
        <img src="../../public/assets/bordertitle-left.png" alt="" />

    </div>
      
    </>
  )
}

export default Title
