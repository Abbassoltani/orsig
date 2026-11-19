import React from 'react'

function CardItem() {
  return (
    <>
      <div className="col-12 col-md-4 card position-relative">
        <img src="../../public/assets/bannercard3.png" className='card-img' alt="" />
        <img src="../../public/assets/bannercardhover3.png" className='card-img-hover' alt="" />
    
        <div className="card-content position-absolute">
            <div className="card-content-wrapper position-relative">

            <div className="cart-content-img position-absolute">
                <img src="../../public/assets/card-img-3.png" className='img-fluid ' alt="" />
            </div>
            <div className="card-content-des position-absolute">
                  <h1>فیلترهای صنعتی</h1>
            <p className="text-muted">انواع فیلترهای هوا برای کاربردهای صنعتی، متناسب با نیازهای مختلف سیستم‌های فیلتراسیون.</p>
 <button>مشاهده محصولات</button>
            </div>
          
           

            </div>
        </div>
    </div>
    <div className="col-12 col-md-4 card position-relative">
        <img src="../../public/assets/bannercard1.png" className='card-img' alt="" />
        <img src="../../public/assets/bannercardhover.png" className='card-img-hover' alt="" />
    
        <div className="card-content position-absolute">
            <div className="card-content-wrapper position-relative">

            <div className="cart-content-img position-absolute">
                <img src="../../public/assets/card-img-1.png" className='img-fluid ' alt="" />
            </div>
            <div className="card-content-des position-absolute">
                  <h1>فیلترخودروهای سنگین</h1>
            <p className="text-muted">فیلترهای هوا برای خودروهای سنگین و 
کاربردهای مرتبط، متناسب با نیازهای سیستم
 ورودی هوای موتور.</p>
 <button>مشاهده محصولات</button>
            </div>
          
           

            </div>
        </div>
    </div>

       <div className="col-12 col-md-4 card position-relative">
        <img src="../../public/assets/bannercard2.png" className='card-img' alt="" />
        <img src="../../public/assets/bannercardhover2.png" className='card-img-hover' alt="" />
    
        <div className="card-content position-absolute">
            <div className="card-content-wrapper position-relative">

            <div className="cart-content-img position-absolute">
                <img src="../../public/assets/card-img-2.png" className='img-fluid ' alt="" />
            </div>
            <div className="card-content-des position-absolute">
                  <h1>فیلتر خودروهای سبک</h1>
            <p className="text-muted">فیلترهای هوا برای خودروهای سنگین و کاربردهای مرتبط، متناسب با نیازهای سیستم ورودی هوای موتور.</p>
 <button>مشاهده محصولات</button>
            </div>
          
           

            </div>
        </div>
    </div>

     
      
    </>
  )
}

export default CardItem
