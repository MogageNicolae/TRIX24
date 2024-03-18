import "./HomePage.css";
import NavigationBar from "../../navigationBar/NavigationBar";
import homePageImg from "../../assets/images/home-page.webp";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function HomePage() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-05-17") - +new Date();

        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60))
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="home-page">
            <NavigationBar active_page="home"/>
            <div>
                <img src={homePageImg} alt="home-page yellow background" className="background-image"/>
                <div className="page-center">
                    <div className="name-middle name-middle-trix">TRIX</div>
                    <div className="hp-buttons">
                        {/*<Link to="/registration" className="registration-button">Register here</Link>*/}
                        {/*<Link to="/shop" className="registration-button">Shop coming soon</Link>*/}
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="hp-button disabled">
                            Registrations open soon
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="hp-button disabled">
                            Shop coming soon
                        </a>
                    </div>
                </div>
                <div className="time-until-conference-container">
                    <div className="countdown">
                        Countdown
                    </div>
                    <div className="time-until-conference">
                        <div className="days">
                            <div>{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days}</div>
                            <div>Days</div>
                        </div>
                        <div className="hours">
                            <div>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</div>
                            <div>Hours</div>
                        </div>
                        <div className="minutes">
                            <div>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</div>
                            <div>Minutes</div>
                        </div>
                        <div className="seconds">
                            <div>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</div>
                            <div>Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}