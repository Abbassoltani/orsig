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
      <nav className="container navbar  navbar-expand-lg navbar-light d-flex flex-column gap-3 flex-lg-row">
      

          {/* لوگو */}

          
          
              <a className="navbar-brand p-0 m-0" href="#">
            <img src="/assets/logo.png" alt="logo" className="img-fluid" style={{ maxHeight: '40px' }} />
          </a>

          
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarnav"
            aria-controls="navbarnav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* لیست منو */}
          <div className="collapse navbar-collapse" id="navbarnav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a href="#" className="nav-link">صفحه اصلی</a></li>
              <li className="nav-item"><a href="#" className="nav-link">محصولات</a></li>
              <li className="nav-item"><a href="#" className="nav-link">صادرات و همکاری</a></li>
              <li className="nav-item"><a href="#" className="nav-link">دانشی فنی و کاتالوگ ها</a></li>
              <li className="nav-item"><a href="#" className="nav-link">درباره ما</a></li>
              <li className="nav-item"><a href="#" className="nav-link">تماس با ما</a></li>
            </ul>
            <div className="search-box position-relative">
              <i class="ri-search-line position-absolute translate-middle top-50"></i>
              <input type="text" className="form-control" />
            </div>
          </div>

      
      </nav>


    </>
  )
}

export default Navbar