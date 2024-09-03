import './Footer.css'




const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (
    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-5 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <a href="#">
                <h1>أحمد محمد</h1>
                </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>الأقسام</h3>
                        <a href="/Qalib/LandingPage" target="_blank"><p>الرئيسية</p></a>
                        <a href="/Qalib/LandingPage" target="_blank"><p>أحدث الأعمال</p></a>
                        <a href="/Qalib/PersonalTemplate" target="_blank"><p>أحدث المقالات</p></a>
                        <a href="/Qalib/WebsitesTemplate" target="_blank"><p>المؤلفات</p></a>
                        <a href="/Qalib/WebsitesTemplate" target="_blank"><p>الخدمات</p></a>
                        <a href="/Qalib/OtherTemplate" target="_blank"><p className='marginBottom'>تواصل معي</p></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection">
                        <h3>تعلم البرمجة</h3>
                        <a href="https://satr.codes/" target="_blank"><p>منصة سطر التعليمية</p></a>
                        <a href="https://elzero.org/" target="_blank"><p>أكاديمية الزيرو</p></a>
                        <a href="https://harmash.com/" target="_blank"><p>هرمش</p></a>
                        <a href="https://harmash.com/" target="_blank"><p>JavaScript</p></a>
                        <a href="https://harmash.com/" target="_blank"><p>Html & Css</p></a>
                        <a href="https://harmash.com/" target="_blank"><p className='marginBottom'>React</p></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection marginBottom">
                        <h3>أبقى على تواصل</h3>
                        <a href="#"><i className="fa-brands fa-x-twitter footericon"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin footericon"></i></a>
                        <a href="#"><i className="fa-regular fa-envelope-open footericon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="row baner">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection marginBottom">
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="deatelsSection marginBottom">
                        <h3>جميع الحقوق محفوظة</h3>
                        <p>قالب {year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
