import "./PeopleCarousel.css"
import background from "../../../assets/images/Background.webp";
import {useEffect, useState} from "react";
import Person from "../Person/Person";
import PersonDetail from "../PersonDetail/PersonDetail";

export default function PeopleCarousel({images, toAdd}) {
    const [clipXPathPosition, setClipXPathPosition] = useState(20);
    const [translateXValue, setTranslateXValue] = useState(20);
    const [currentIndexImage, setCurrentIndexImage] = useState(0);
    const [nextIndexImage, setNextIndexImage] = useState(1);
    const [personStates, setPersonStates] = useState(images.map((image, index) => {
        return {
            nextIndex: index,
            isActiveImage: index === currentIndexImage,
        };
    }));
    const people = images.map((image, index) => {
        return <Person key={index} name={image.name} image={image.image} nextIndex={personStates[index].nextIndex}
                       isActiveImage={personStates[index].isActiveImage}/>
    });
    const peopleDetails = images.map((image, index) => {
        return <PersonDetail key={index} person={image} isActive={index === currentIndexImage}/>
    });

    useEffect(() => {
        setPersonStates((prevPersonStates) => {
            return prevPersonStates.map((personState, index) => {
                return {
                    ...personState,
                    nextIndex: index - currentIndexImage,
                    isActiveImage: index === currentIndexImage,
                };
            });
        });
    }, [currentIndexImage, nextIndexImage]);

    const handleLeftClick = () => {
        let newClipValue = (clipXPathPosition - toAdd + 100) % 100;
        const newCurrentIndexImage = (currentIndexImage - 1 + images.length) % images.length;
        const newNextIndexImage = (nextIndexImage - 1 + images.length) % images.length;

        newClipValue = newClipValue < 20 ? 80 : newClipValue;
        setClipXPathPosition(newClipValue);
        setTranslateXValue(newClipValue);

        setCurrentIndexImage(newCurrentIndexImage);
        setNextIndexImage(newNextIndexImage);
    };

    const handleRightClick = () => {
        let newClipValue = (clipXPathPosition + toAdd) % 100;
        const newCurrentIndexImage = (currentIndexImage + 1) % images.length;
        const newNextIndexImage = (nextIndexImage + 1) % images.length;

        newClipValue = newClipValue > 80 ? 20 : newClipValue;
        setClipXPathPosition(newClipValue);
        setTranslateXValue(newClipValue);

        setCurrentIndexImage(newCurrentIndexImage);
        setNextIndexImage(newNextIndexImage);
    };

    return (
        <div>
            <span className="material-symbols-outlined arrow left-arrow" onClick={handleLeftClick}>
                arrow_back_ios_new
            </span>
            <span className="material-symbols-outlined arrow right-arrow" onClick={handleRightClick}>
                arrow_forward_ios
            </span>
            <div className="team-image-container">
                <img src={background}
                     alt="background"
                     className="team-background-image"
                     style={{
                         clipPath: `circle(25% at ${clipXPathPosition}% 50%)`,
                         transform: `translateX(${50 - translateXValue}%)`,
                     }}
                />
                {people}
            </div>
            <div className="team-detail-container">
                {peopleDetails[currentIndexImage]}
                {peopleDetails[nextIndexImage]}
            </div>
        </div>
    )
}