import language from '../database/language.json'

function Navbar() {
  return (
<>
    <div className="topbar container-fluid text-center bg-black ">

      {language.map((icon) => (
        <span
          key={icon.code}
          className={`m-1 ${icon.flag}`}
        ></span>
      ))}

    </div>
    <div className="nav navbar-expand-lg">
      <div className="navbar-brand">
        <img src="/assets/logo.png" alt="logo"  className='img-fluid' />
      </div>

      
    </div>


</>
  )
}

export default Navbar