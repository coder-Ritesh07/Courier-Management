import "./Hero.css";
import img2 from "../Images/new-hero.png";
import ContactUs from "./ContactUs";
import About from "./About";
function Hero()
{
   return (
    <>
     <main className="hero-section">
        <div className="main-img">
            <img src={img2} alt="hero img" style={{width:"600px",height:"500px"}} className="hero-img" />
        </div>
        <div className="heading-section">
        <h1 className="heading">A Trusted Provider of <span className="dark-name">Courier Services</span></h1>
        <p className="sub-heading">We deliver your product safely to your home in a resonable time.</p>
     <div className="buttons">
     <span><a href="#getstart" className="start">Get Started</a></span>
     <span><a href="#request" className="request">Pick Up Request</a></span>
     </div>
        </div>
     </main >
    <div className="pricing-details" id="pricing">
      <h1 className="price-heading">Details of Pricing</h1>
      <div className="boxes">
        <div className="card-1">
         <h2 className="card-heading">Local delivery</h2>
         <ol>
            <li className="price-info">Weight:  <p>₹15</p></li>
            <li className="price-info">Distance: <p>₹15</p></li>
            <li className="price-info">Speed: <p>₹18</p></li>
            <li className="price-info">Package dimensions: <p>₹15</p></li>
            <li className="price-info">Additional Service: <p>₹20</p></li>
         </ol> 
         <span className="Total-price">₹40 - ₹120 (per kg)</span>
       </div>
         <div className="card-2">
         <h2 className="card-heading">Metro to metro delivery</h2>
         <ol>
            <li className="price-info">Weight: <p>₹54</p></li>
            <li className="price-info">Distance: <p>₹70</p></li>
            <li className="price-info">Speed: <p>₹55</p></li>
            <li className="price-info">Package dimensions: <p>₹65</p></li>
            <li className="price-info">Additional Service: <p>₹80</p> </li>
         </ol> 
         <span className="Total-price">₹265 - ₹515 (per kg)</span>
         </div>
       </div>
     </div>
     <ContactUs/>
     <About/>
    </>
   )
}
export default Hero;