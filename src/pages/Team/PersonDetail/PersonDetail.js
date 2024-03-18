import "./PersonDetail.css"

export default function PersonDetail({person, isActive}) {
    return (
        <div
            className={`person-detail-container ${isActive ? 'is-detail-active' : 'is-detail-not-active'}`}>
            <div className={`name`}>{person.name}</div>
            <div className={`position`}>{person.position}</div>
        </div>
    )
}