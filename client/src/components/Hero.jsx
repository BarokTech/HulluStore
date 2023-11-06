function Hero() {
  return (
    <div
      className="p-5 text-center  bg-image"
      style={{
        backgroundImage: `url("https://cdn.pixelied.com/thumbnails/8d4428c0-d023-421b-911e-8356ce9f66d5.jpeg?ts=1610453098464")`,
        height: 450,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mask " style={{ backgroundColor: "#000", opacity: 0.8 }}>
        <div className="d-flex justify-content-center align-items-center h-100 ">
          <div className="hero-text text-white h-100 w-150 m-2">
            <h1 className="mb-3">Join Us</h1>
            <input className="hero-email" type="email" placeholder="email" />
            <a className="btn btn-primary btn-lg" to="#!" role="button">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
