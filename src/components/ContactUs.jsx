import "./ContactUs.css";
import img5 from "../Images/Contact us.png";
function ContactUs()
{
    return(
        <>
        <div className="contact-page">
            <div className="img-paat">
                <img src={img5} alt="contact us" style={{width:"500px",height:"400px"}} />
                <p className="log-info">We will contact in shortest time.</p>
            </div>

            <div className="contact-deatils">
             <h1 className="contact-heading" id="contact-us">Contact Us</h1>
                <form action="" method="post" className="form-info">

                  <input type="text"  id="name" className="same-info" placeholder="Enter Your Name" required/>
                  <input type="email"  id="email" className="same-info" placeholder="Enter Your E-mail" required/>
                  <input type="number"  id="number" className="same-info" placeholder="Enter Your Number" required/>
                  <textarea  id="textarea"  className="text-area" placeholder="Enter Your Message..."></textarea>
                  <span><a href="#send" className="contact-btn">Contact</a></span>
                </form>
                <p className="footer">If Don't have an account? <a href="/RegistrationPage">Register</a></p>
            </div>
        </div>
        </>
    )
}
export default ContactUs;