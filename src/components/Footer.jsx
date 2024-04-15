import "./Footer.css";
import img1 from "../Images/bike logo.png";
function Footer() {
  return (
    <>
      <div className="footer-page">
        <div className="footer-part1">
          <h2 className="footer-part1-heading">Get an update every week</h2>
          <p className="footer-part1-info">
            we ensure that your products is delivered in the safly possible
            manner,at the correct location,at the right time.
          </p>
        </div>
        <div className="footer-part-2">
          <div className="left-part">
            <div className="logo">
              <img
                src={img1}
                alt="Rapid Rovers"
                style={{ width: "60px", height: "60px" }}
                className="bike-logo"
              />
            </div>
            <span className="logo-name">Rapid Rovers</span>
            <p className="company">The most trusted company in your area.</p>
          </div>
          <div className="right-part">
            <ul>
                <span className="right-part-info">Other link</span>
                <li className="footer-data-1">Blogs</li>
                <li className="footer-data">Mover website</li>
                <li className="footer-data">Traffic update</li>
            </ul>
            <ul>
                <span className="right-part-info">Services</span>
                    <li className="footer-data-1">Corporate goods</li>
                    <li className="footer-data">Artworks</li>
                    <li className="footer-data">Documents</li>
            </ul>
            <ul>
                <span className="right-part-info">Customer care</span>
                    <li className="footer-data-1">About us</li>
                    <li className="footer-data">Contact us</li>
                    <li className="footer-data">Get update</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
