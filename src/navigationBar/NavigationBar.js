import './NavigationBar.css';
import NavigationBarLeft from "./navigationBarLeft/NavigationBarLeft";
import NavigationBarCenter from "./navigationBarCenter/NavigationBarCenter";
import NavigationBarRight from "./navigationBarRight/NavigationBarRight";

export default function NavigationBar({active_page}) {
    return (
        <nav className="navigation-bar">
            <NavigationBarLeft />
            <NavigationBarCenter active_page={active_page}/>
            <NavigationBarRight />
        </nav>
    )
}