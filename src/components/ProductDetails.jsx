import { useParams } from "react-router-dom";





function ProductDetails() {
    const params=useParams()
    console.log(params);
    
  return (
    <main className="details-page" dir="rtl">

      {/* Hero */}
      <section className="details-hero">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-6">
              <span className="details-label">محصولات ORSIG</span>

              <h1>
                فیلترهای ماشین‌های سنگین
                <span> ORSIG</span>
              </h1>

              <p>
                عملکرد قدرتمند، فیلتراسیون دقیق و محافظت
                از موتور در شرایط سخت کاری؛ با فیلترهای
                باکیفیت ORSIG.
              </p>

              <a href="#filter-types" className="btn details-btn">
                آشنایی با محصولات
              </a>
            </div>

            <div className="col-12 col-lg-6">
              <img
                src="/assets/productdetailsTrackbanner.png"
                alt="فیلترهای ماشین سنگین ORSIG"
                className="img-fluid details-hero-img"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="details-advantages">
        <div className="container">
          <div className="row g-3">

            <div className="col-6 col-lg-3">
              <div className="advantage-card">
                <span>🛡️</span>
                <h5>محافظت از موتور</h5>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="advantage-card">
                <span>⚙️</span>
                <h5>فیلتراسیون دقیق</h5>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="advantage-card">
                <span>⏱️</span>
                <h5>عمر مفید بالا</h5>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="advantage-card">
                <span>📈</span>
                <h5>عملکرد پایدار</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Types */}
      <section className="filter-types py-5" id="filter-types">
        <div className="container">

          <div className="details-section-title">
            <h2>انواع فیلترهای ماشین سنگین</h2>
            <p>محصولات متنوع ORSIG برای نیازهای مختلف خودرو</p>
          </div>

          <div className="row g-4">

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="filter-card">
                <img src="/assets/filtertruck1.png" alt="فیلتر هوا" />
                <h4>فیلتر هوا</h4>
                <p>
                  تصفیه هوای ورودی موتور و کمک به بهبود
                  عملکرد احتراق
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="filter-card">
                <img src="/assets/filtertruck2.png" alt="فیلتر روغن" />
                <h4>فیلتر روغن</h4>
                <p>
                  پاکسازی روغن موتور و کمک به کاهش
                  ذرات آلاینده
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="filter-card">
                <img src="/assets/filtertruck3.png" alt="فیلتر سوخت" />
                <h4>فیلتر سوخت</h4>
                <p>
                  جلوگیری از ورود آلودگی‌ها به سیستم
                  سوخت‌رسانی
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="filter-card">
                <img src="/assets/filtertruck4.png" alt="فیلتر کابین" />
                <h4>فیلتر کابین</h4>
                <p>
                  تصفیه هوای ورودی کابین و بهبود
                  کیفیت هوای تنفسی
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why ORSIG */}
      <section className="why-orsig py-5">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-6">
              <img
                src="/assets/trackbannerbottom.jpg"
                alt="جزئیات فیلتر ORSIG"
                className="img-fluid why-orsig-img"
              />
            </div>

            <div className="col-12 col-lg-6">
              <h2>چرا فیلترهای ORSIG؟</h2>

              <ul className="why-list">
                <li>استفاده از مواد اولیه باکیفیت</li>
                <li>طراحی مناسب برای شرایط کاری سنگین</li>
                <li>توجه به کیفیت و دقت فیلتراسیون</li>
                <li>تنوع محصولات برای کاربردهای مختلف</li>
              </ul>

              <a href="/contact" className="btn details-btn">
                درخواست مشاوره
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default  ProductDetails;
