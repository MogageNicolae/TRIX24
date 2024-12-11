import "./Submenu.css"
import {Link} from "react-router-dom";

export default function Submenu({extendMenu, isSubmenuAvailable, active_page}) {
    console.log(active_page);

    return (
        <>
            {isSubmenuAvailable && <span className="close-submenu-button" onClick={extendMenu}>x</span>}
            <div className={active_page === "registration" ? "active" : ""}><a
                href="https://9ykk8z2z34n.typeform.com/to/D4CltRfD"
                target="_blank"
                rel="noreferrer">
                Registration
            </a></div>
            <div className={active_page === "shop" ? "active" : ""}><Link to="/shop">Shop</Link></div>
            <div className={active_page === "agenda" ? "active" : ""}><a
                href="https://docs.google.com/spreadsheets/d/1Qt-iQlBb4XyZ38WQVQ0v1Zuz6UItFqB9IbxBNu0c1_o/edit?usp=sharing"
                target="_blank"
                rel="noreferrer">
                Agenda
                </a></div>
            <div className={active_page === "info" ? "active" : ""}><Link to="/info">Info</Link></div>
            <div className={active_page === "team" ? "active" : ""}><Link to="/team">Team</Link></div>
            <div className={active_page === "history" ? "active" : ""}><Link to="/history">History</Link></div>
            <div className={active_page === "partners" ? "active" : ""}><Link to="/partners">Partners</Link></div>
        </>
    )
}