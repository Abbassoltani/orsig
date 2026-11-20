
function ContactUs() {
  return (
    <section className="contact-section py-5 bg-body-secondary" dir="rtl">
      <div className="container-fluid px-lg-5">
        <div className="row g-3 align-items-center">

          {/* تصویر ساختمان */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="contact-building">
              <img
                src="/assets/orsig-building.jpg"
                alt="ساختمان شرکت ORSIG"
                className="img-fluid w-100 h-100"
              />
            </div>
          </div>

          {/* اطلاعات تماس */}
          <div className="col-12 col-md-8 col-lg-3">
            <div className="contact-info d-flex flex-column gap-2">

              <div className="contact-info-card d-flex align-items-center gap-3 p-3">
                <div className="contact-icon">📍</div>
                <div>
                  <h6>آدرس</h6>
                  <p>تهران، شهرک صنعتی عباس‌آباد، بلوار صنعت، پلاک ۱۲</p>
                </div>
              </div>

              <div className="contact-info-card d-flex align-items-center gap-3 p-3">
                <div className="contact-icon">☎</div>
                <div>
                  <h6>تلفن</h6>
                  <p>۰۲۱-۴۴۵۶۷۸۹۰</p>
                </div>
              </div>

              <div className="contact-info-card d-flex align-items-center gap-3 p-3">
                <div className="contact-icon">✉</div>
                <div>
                  <h6>ایمیل</h6>
                  <p>info@orsig.ir</p>
                </div>
              </div>

              <div className="contact-info-card d-flex align-items-center gap-3 p-3">
                <div className="contact-icon">◷</div>
                <div>
                  <h6>ساعات کاری</h6>
                  <p>
                    شنبه تا پنجشنبه
                    <br />
                    ۸:۳۰ تا ۱۶:۳۰
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* فرم ارسال پیام */}
          <div className="col-12 col-lg-6">
            <div className="contact-form-box p-4 p-lg-5">

              <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="contact-title mb-0">ارسال پیام</h4>
                <span className="contact-title-icon">▤</span>
              </div>

              <p className="text-secondary small mb-4">
                سوال، درخواست همکاری یا مشاوره خود را برای ما ارسال کنید.
              </p>

              <form className="row g-3">

                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام و نام خانوادگی"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="شماره تماس"
                    required
                  />
                </div>

                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ایمیل (اختیاری)"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="متن پیام"
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn contact-submit px-5">
                    ارسال پیام <span>➤</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;
