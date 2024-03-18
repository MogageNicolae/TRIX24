import "./Person.css";

export default function Person({name, image, nextIndex, isActiveImage}) {
    return (
        <div
            className={`person-image-container ${isActiveImage ? 'is-photo-active' : 'is-photo-not-active '}`}
            style={
                {
                    transform: `translateX(${nextIndex * 350}px)`
                }
            }
        >
            <img src={image} alt={name} className="person-image"/>
        </div>
    )
}