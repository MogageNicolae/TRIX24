import "./HomePage.css";
import NavigationBar from "../../navigationBar/NavigationBar";
import homePageImg from "../../assets/images/home-page.png";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <NavigationBar/>
            <img src={homePageImg} alt="home-page yellow background" className="background-image"/>
            <div>
                <div className="trix-name-middle">TRIX</div>
                <Link to="/registration" className="registration-button">Register here</Link>
            </div>
        </div>
    )
}