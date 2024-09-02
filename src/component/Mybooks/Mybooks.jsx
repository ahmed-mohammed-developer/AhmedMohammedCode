import data from "../../../public/data.json";





const Mybooks = () => {
  const datamybooks = data.mybooks;
  return (
    <div className="latestworks" id="Mybooks">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>المؤلفات</h2>
            <span className="line"></span>
          </div>
          {datamybooks.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
                <iframe src={item.view} width="100%" height="440px"></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mybooks;
