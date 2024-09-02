import "./Latestworks.css";
import data from "../../../public/data.json";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";




const Latestworks = () => {
  const dataprogict = data.progict;
  return (
    <div className="latestworks" id="Latestworks">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>أحدث الأعمال</h2>
            <span className="line"></span>
          </div>
          {dataprogict.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
              <a href={item.qalip} target="_blank">
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                </a>
                <div className="cardIcon">
                <a href={item.qalip} target="_blank">
                <GiTempleGate className="iconcard" />
                </a>
                <a href={item.view} target="_blank">
              <FaEye className="iconcard" />
              </a>
              <a href={item.download} target="_blank">
              <FaGithub className="iconcard" />
              </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestworks;
