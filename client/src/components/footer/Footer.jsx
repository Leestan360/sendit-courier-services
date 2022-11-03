const Footer = () => {

  const scrollTop = () => {
    window.scrollTo(500, 0);
  }

  return (
    <div className="flex flex-col md:flex-row justify-around font-poppins text-slate-800 font-thin mb-8">
      <div className="max-w-[600px] w-[100%] md:w-auto px-2">
        <h3 className="font-bold text-xl">Contact</h3>
        <ul>
          <li className="my-3 py-1">
            <span className="font-bold mr-1">Address:</span>343 Jogoo Road
          </li>
          <li className="my-3 py-1">
            <span className="font-bold mr-1">Phone:</span>+25478769023
          </li>
          <li className="my-3 py-1">
            <span className="font-bold mr-1">Hours:</span>9am to 12pm
          </li>
        </ul>
        <div className="flex flex-col justify-around">
          <h3 className="font-bold text-xl mb-[6px]">Follow Us</h3>
          <div className="flex ">
            <i className="bx bxl-facebook-circle bx-sm p-1"></i>
            <i className="bx bxl-twitter bx-sm p-1"></i>
            <i className="bx bxl-instagram bx-sm p-1"></i>
            <i className="bx bxl-youtube bx-sm p-1"></i>
          </div>
        </div>
      </div>
      <div className="max-w-[600px] w-[100%] md:w-auto px-2">
        <h3 className="font-bold text-xl">About</h3>
        <ul>
          <li className="my-3 py-1">About Us</li>
          <li className="my-3 py-1">Delivery Information</li>
          <li className="my-3 py-1">Privacy Policy</li>
          <li className="my-3 py-1">Terms & Conditions</li>
          <li className="my-3 py-1">Contact Us</li>
        </ul>
      </div>
      <div className="max-w-[600px] w-[100%] md:w-auto px-2">
        <h3 className="font-bold text-xl">My Account</h3>
        <ul>
          <li className="my-3 py-1">Sign In</li>
          <li className="my-3 py-1">Log In</li>
          <li className="my-3 py-1">Help</li>
          <li className="my-3 py-1">Administrator</li>
          <li className="my-3 py-1">Developers</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between max-w-[600px] w-[100%] md:w-auto px-2">
        <h3 className="font-bold text-xl">Install App</h3>
        <h3>From App Store or Google Play</h3>
        <div className="flex flex-col sm:flex-row">
          <img
            className="border m-1 max-w-[150px]"
            src={process.env.PUBLIC_URL + "/app.jpg"}
            alt=""
          />
          <img
            className="border m-1 max-w-[150px]"
            src={process.env.PUBLIC_URL + "/play.jpg"}
            alt=""
          />
        </div>
        <h3>Secured Payment Gateways</h3>
        <img
          className="max-w-[250px] w-[100%]"
          src={process.env.PUBLIC_URL + "/pay.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
