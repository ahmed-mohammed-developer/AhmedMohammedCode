import "./Latestworks.css";
import data from "../../../public/data.json";

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
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
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
