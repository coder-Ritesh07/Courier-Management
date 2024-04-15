import "./RegistrationPage.css";
import img4 from "../Images/new-register.png";
function RegistrationPage()
{
    return (
        <>
        <div className="registration-page ">
            <div className="img-part">
                <img src={img4} alt="signup" style={{width:"500px",height:"400px"}} />
                <p className="log-info">We will contact in shortest time.</p>
            </div>

            <div className="regis-details">
                <h1 className="re-heading">Registration Form</h1>
            <form action="" method="post" className="form-info">
                <input type="text" id="name" className="same-info" placeholder="Enter Your Name " required/>
                <input type="e-mail" id="Email" className="same-info" placeholder="Enter Your E-mail " required/>
                <input type="password" id="password" className="same-info" placeholder="Enter Your Password " required/>
                <input type="number" id="number" className="same-info" placeholder="Enter Your Contact Number " required/>
                <input type="text" id="number" className="same-info" placeholder="Enter Your Pickup Address " required/>
                <span><a href="#send" className="regis-btn">Register </a></span>
            </form>
                <p className="footer">If alredy have an account? <a href="/Login">Login</a></p>
           </div>
        </div>
        </>
    )
}
export default RegistrationPage;