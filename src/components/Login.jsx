import "./Login.css";
import img3 from "../Images/Login-2.png";
function Login()
{
    return (
        <>
        <div className="login-container">

        <div className="image-part">
            <img src={img3} alt="login" style={{width:"500px",height:"400px"}} />
            <p className="log-info">We will contact in shortest time.</p>
        </div>

        <div className="login-deatils">
        <h1 className="heading">Log in</h1>
          <form action="" method="post" encType="" className="form-info">
            <input type="text" id="E-mail" className="e-mail" placeholder="Enter Your E-mail" required />
            <input type="password" id="password" className="pass" placeholder="Enter Your Password" required />
            <span><a href="#send" className="send">Send</a></span>
          </form>
          <p className="footer">Don't have an account? <a href="/RegistrationPage">Register</a></p>
        </div>

        </div>
        </>
    )
}
export default  Login;