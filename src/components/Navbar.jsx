import './Navbar.css';
import img1 from "../Images/bike logo.png";
function Navbar()
{
    return <div className="NavContainer">
        <div className="logo-section">
            <div className="logo">
                <img src={img1} alt="Rapid Rovers" style={{width:"60px",height:"60px"}} className='bike-logo' />
            </div>
            <span className="logo-name">
            Rapid Rovers
            </span>
        </div>
        <nav className="main-nav">
            <ul className='nav-content'>
                <li><a href="#home" className='nav-list'>Home</a></li>
                <li><a href="#pricing" className='nav-list'>Pricing</a></li>
                <li><a href="#abouts" className='nav-list'>About</a></li>
                <li><a href="#contact-us" className='nav-list'>Contact Us</a></li>
            </ul>
            <div className="text-box">
            {/* <i class="ri-search-line"></i> */}
                <input type="text" id="text-area" className='search-area' placeholder='Search here' />
            </div>
        <span><a href="/Login" className='btn'>Log In</a></span>
        </nav>
    </div>
}

export default Navbar;