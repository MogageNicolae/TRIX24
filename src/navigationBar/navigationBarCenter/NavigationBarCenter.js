import "./NavigationBarCenter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Submenu from "./submenu/Submenu";

export default function NavigationBarCenter({active_page}) {
    const [isSubmenuExtended, setIsSubmenuExtended] = useState(false);
    const [isSubmenuAvailable, setIsSubmenuAvailable] = useState(window.innerWidth <= 800);
    const [className, setClassName] = useState("hidden");

    const extendMenu = () => {
        setIsSubmenuExtended(!isSubmenuExtended);
    }

    useEffect(() => {
        const classes = document.querySelector(".navigation-bar").parentElement.classList;
        if (isSubmenuExtended) {
            setClassName("submenu");
            classes.remove("submenu-closed");
            classes.add("submenu-extended");
            setTimeout(() => {
                classes.add("submenu-fixed");
            }, 500);
        } else {
            classes.remove("submenu-extended");
            classes.remove("submenu-fixed");
            classes.add("submenu-closed");
            setTimeout(() => {
                setClassName("hidden");
            }, 500);
        }
    }, [isSubmenuExtended]);

    useEffect(() => {
        const handleResize = () => {
            setIsSubmenuAvailable(window.innerWidth <= 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            setIsSubmenuExtended(false);
        };
    }, [isSubmenuAvailable]);

    return (
        <div className="navigation-bar-center">
            <div
                className={!isSubmenuAvailable ? "navigation-bar-center-extended" : className}>
                <Submenu extendMenu={extendMenu} isSubmenuAvailable={isSubmenuAvailable} active_page={active_page}/>
            </div>
            <div
                className={"navigation-bar-center-extend-button"}
                onClick={extendMenu}>
                <FontAwesomeIcon icon={faBars} color="white"/>
            </div>
        </div>
    )
}