import "./NavigationBarLeft.css"

export default function NavigationBarLeft() {
    return (
        <>
            <a href="#" className="navigation-bar-left">
                <div className="nb-left-left">
                    <div className="nb-trix-name">TRIX</div>
                    <div className="nb-conference-2024">Conference 2024</div>
                </div>
                <div className="nb-left-right">
                    <div className="nb-date">17-19 May</div>
                    <div className="nb-location">Ighiu, Alba-Iulia</div>
                </div>
            </a>
        </>
    )
}