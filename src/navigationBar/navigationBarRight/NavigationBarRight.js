import "./NavigationBarRight.css"
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavigationBarRight() {
    return (
        <div className="navigation-bar-right">
            <a
                href="https://www.instagram.com/trix.cluj?igsh=MWJiYmk2N2xvYTd2eg"
                target="_blank"
                rel="noreferrer"
                className="nb-instagram">
                <FontAwesomeIcon icon={faInstagram} /> TRIX Cluj
            </a>
            <a
                href="https://www.instagram.com/lc.cluj?igsh=eXdrd3g2Mm4zNjY2"
                target="_blank"
                rel="noreferrer"
                className="nb-instagram">
                <FontAwesomeIcon icon={faInstagram} /> LC Cluj
            </a>
        </div>
    )
}