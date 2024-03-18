import "./ComingSoon.css"
import NavigationBar from "../../navigationBar/NavigationBar";
import homePageImg from "../../assets/images/home-page.webp";

export default function ComingSoon({active_page}) {
    return (
        <div className="coming-soon-page">
            <NavigationBar active_page={active_page}/>
            <img src={homePageImg} alt="home-page yellow background" className="background-image"/>
            <div className="page-center">
                <div className="name-middle name-middle-coming-soon">STAY TUNED</div>
                <div className="name-middle name-middle-coming-soon">COMING SOON</div>
            </div>
        </div>
    )
}