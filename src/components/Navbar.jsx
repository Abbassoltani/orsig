import { Link } from 'react-router-dom'
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
      <div className="container-fluid navbar">

      
      <nav className="container navbar  navbar-expand-lg navbar-light d-flex flex-column gap-3 flex-lg-row">
      

          {/* لوگو */}

          
          
              <Link className="navbar-brand p-0 m-0" to="#">
            <img src="/assets/logo.png" alt="logo" className="img-fluid" style={{ maxHeight: '40px' }} />
          </Link>

          
        
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
              <li className="nav-item"><Link to="/" className="nav-link active">صفحه اصلی</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">محصولات</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">صادرات و همکاری</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">دانشی فنی و کاتالوگ ها</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">درباره ما</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">تماس با ما</Link></li>
            </ul>
            <div className="search-box position-relative">
              <i class="ri-search-line position-absolute translate-middle top-50"></i>
              <input type="text" className="form-control" />
            </div>
          </div>

      
      </nav>
</div>

    </>
  )
}

export default Navbar