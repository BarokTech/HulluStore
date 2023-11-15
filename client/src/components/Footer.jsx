function Footer() {
  return (
    <footer className=" text-center text-start border border-white pt-4 mb-0 bg-secondary">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-1 mb-lg-0">
            <h5 className="text-uppercase mb-1">OUR WORLD</h5>

            <ul className="list-unstyled mb-1">
              <li>
                <a to="#!" className="text-black">
                  About us
                </a>
              </li>
              <li>
                <a to="#!" className="text-black">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-1 mb-lg-0">
            <h5 className="text-uppercase mb-1">Assistance</h5>

            <ul className="list-unstyled">
              <li>
                <a to="#!" className="text-black">
                  Contact us
                </a>
              </li>
              <li>
                <a to="#!" className="text-black">
                  Shipping Information
                </a>
              </li>
              <li>
                <a to="#!" className="text-black">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a to="#!" className="text-black">
                  Payment
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-3 mb-1 mb-lg-0">
            <h5 className="text-uppercase mb-1">Careers</h5>

            <ul className="list-unstyled">
              <li>
                <a to="#!" className="text-black">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-1 mb-lg-0">
            <h5 className="text-uppercase mb-1">Join Our Newsletter</h5>

            <div className="form-outline form-white mb-1">
              <input
                type="email"
                placeholder="Email"
                id="form5Example2"
                className="form-control p-1 m-2"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center p-1 border-top border-white">
        © 2023 Copyright:
        <a className="text-black" to="/">
          hullustore.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
