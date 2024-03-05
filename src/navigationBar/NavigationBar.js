import './NavigationBar.css';
import NavigationBarLeft from "./navigationBarLeft/NavigationBarLeft";
import NavigationBarCenter from "./navigationBarCenter/NavigationBarCenter";
import NavigationBarRight from "./navigationBarRight/NavigationBarRight";

export default function NavigationBar() {
    return (
        <nav className="navigation-bar">
            <NavigationBarLeft />
            <NavigationBarCenter />
            <NavigationBarRight />
        </nav>
    )
}