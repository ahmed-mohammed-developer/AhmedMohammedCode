import './Hero.css'
import Myimage from '../../assets/img/myimage.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="row heroflex">
            <div className="col-lg-6 col-md-6 col-sm-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-evenly">
              <div className="heroumage">
                <img src={Myimage} alt="صورتي الشخصية" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-evenly">
              <div className="herodetalis ">
              <p>أهلا وسهلا بك</p>
              <h1> أنا أحمد محمد</h1>
              <h2>مطور واجهات المستخدم</h2>
              <a href="">السيرة الذاتية</a>
              <a className='ahero' href="">تواصل معي </a>
              <div className='iconhero'>
              <FaGithub className='linkdinhero' />
              <FaLinkedinIn  className='linkdinhero'/>
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero