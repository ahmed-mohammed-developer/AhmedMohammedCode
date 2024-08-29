import './Hero.css'
import Myimage from '../../assets/img/myimage.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="row heroflex">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="heroumage">
                <img src={Myimage} alt="صورتي الشخصية" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="herodetalis">
              <p>أهلا وسهلا بك</p>
              <h1> أنا أحمد محمد</h1>
              <h2>مطور واجهات المستخدم</h2>
              <a href="">السيرة الذاتية</a>
              <a href="">تواصل معي </a>
              <div>
              <FaGithub />
              <FaLinkedinIn />
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero