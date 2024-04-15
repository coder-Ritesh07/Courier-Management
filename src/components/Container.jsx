import "./Container.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
function Container()
{
    return (
        <>
        <div className="container">
            <div className="inner-Container">
         <Navbar/>
         <Hero>
         </Hero>
            </div>
        <Footer/>
        </div>
        </>
    )
}
export default Container;