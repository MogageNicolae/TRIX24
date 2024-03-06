import "./NavigationBarCenter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Submenu from "./submenu/Submenu";

export default function NavigationBarCenter() {
    const [isMenuExtended, setIsMenuExtended] = useState(false);

    const extendMenu = () => {
        setIsMenuExtended(!isMenuExtended);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMenuExtended(window.innerWidth <= 1000 ? isMenuExtended : false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuExtended]);

    return (
        <div className="navigation-bar-center">
            <div className={isMenuExtended ? "submenu submenu-fade" : "navigation-bar-center-extended submenu-fade"}>
                <Submenu />
            </div>
            <div className={isMenuExtended ? "navigation-bar-center-extend-button rotate" : "navigation-bar-center-extend-button"} onClick={extendMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}