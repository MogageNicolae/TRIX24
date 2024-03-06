import "./Submenu.css"
import {Link} from "react-router-dom";

export default function Submenu() {
    return (
        <>
            <div><Link to="/registration">Registration</Link></div>
            <div><Link to="/shop">Shop</Link></div>
            <div><Link to="/agenda">Agenda</Link></div>
            <div><Link to="/info">Info</Link></div>
            <div><Link to="/team">Team</Link></div>
            <div><Link to="/history">History</Link></div>
            <div><Link to="/partners">Partners</Link></div>
        </>
    )
}