import "./Submenu.css"
import {Link} from "react-router-dom";

export default function Submenu({extendMenu, isSubmenuAvailable, active_page}) {
    console.log(active_page);

    return (
        <>
            {/*<div><Link to="/registration">Registration</Link></div>*/}
            {/*<div><Link to="/shop">Shop</Link></div>*/}
            {isSubmenuAvailable && <span className="close-submenu-button" onClick={extendMenu}>x</span>}
            <div className={active_page === "registration" ? "active" : ""}><a
                href=""
                target="_blank"
                rel="noreferrer">
                Registration
            </a></div>
            <div className={active_page === "shop" ? "active" : ""}><a
                href=""
                target="_blank"
                rel="noreferrer">
                Shop
            </a></div>
            <div className={active_page === "agenda" ? "active" : ""}><Link to="/agenda">Agenda</Link></div>
            <div className={active_page === "info" ? "active" : ""}><Link to="/info">Info</Link></div>
            <div className={active_page === "team" ? "active" : ""}><Link to="/team">Team</Link></div>
            <div className={active_page === "history" ? "active" : ""}><Link to="/history">History</Link></div>
            <div className={active_page === "partners" ? "active" : ""}><Link to="/partners">Partners</Link></div>
        </>
    )
}