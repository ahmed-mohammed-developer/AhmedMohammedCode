import './Contactme.css'





const Contactme = () => {
  return (
    <div className="Contactme" id="Contactme">
      <div className="container">
        <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 mx-auto">
              <div className="card cardlastprojict">
              <div className="section-title">
            <h2>فلنصنع شياَ عظيماَ معاَ😊</h2>
          </div>
          <div className="user">
            <img src="https://i.postimg.cc/W4WrJyKZ/call.png" alt="user img" />
          </div>
          <div className="iconcontact">
          <p><a href="tel:0506353350">0506353350</a></p>
          <i className="fas fa-phone iconcon"></i>
          </div>
          <div className="iconcontact">
          <p><a href="mailto:ahmed.mohammed.developer@gmail.com">ahmed.mohammed.developer@gmail.com</a></p>
          <i className="fas fa-envelope iconcon"></i>
          </div>
          <div className="iconcontact">
          <p><a href="https://wa.me/966506353350">966506353350</a></p>
          <i className="fab fa-whatsapp iconcon"></i>
          </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contactme;
