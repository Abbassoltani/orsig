
function Title({titlenamefarsi , titlenameEnglish }) {
  return (
    <>
    <div className="title-banner d-flex w-100 justify-content-center ">
        <img src="/assets/bordertitle-right.png" alt="" />
        <div className="title-content text-center">
            <h3>{titlenamefarsi}</h3>
            <h4 className='text-muted fs-6'>{titlenameEnglish}</h4>
        </div>
        <img src="/assets/bordertitle-left.png" alt="" />

    </div>
      
    </>
  )
}

export default Title
