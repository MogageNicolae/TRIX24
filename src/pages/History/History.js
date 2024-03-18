import "./History.css"
import NavigationBar from "../../navigationBar/NavigationBar";
import page1 from "../../assets/images/page1.webp";
import page2 from "../../assets/images/2.webp";
import page4 from "../../assets/images/4.webp";
import page5 from "../../assets/images/5.webp";
import page6 from "../../assets/images/6.webp";
import page7 from "../../assets/images/7.webp";
import page8 from "../../assets/images/8.webp";
import page9 from "../../assets/images/9.webp";
import page10 from "../../assets/images/10.webp";
import page11 from "../../assets/images/11.webp";
import page12 from "../../assets/images/12.webp";
import page13 from "../../assets/images/13.webp";
import page14 from "../../assets/images/14.webp";
import page15 from "../../assets/images/15.webp";
import page16 from "../../assets/images/16.webp";
import page17 from "../../assets/images/17.webp";
import page18 from "../../assets/images/18.webp";
import page20 from "../../assets/images/20.webp";
import page21 from "../../assets/images/21.webp";
import {useEffect, useState} from "react";
import homePageImg from "../../assets/images/home-page.webp";


export default function History() {
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    const [clicked, setClicked] = useState(false);
    const images = [page1, page2, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page20, page21];
    const [imagesClassName, setImagesClassName] = useState(images.map((image, index) => `${index === 0 ? "right" : "right hidden"}`));
    const bookImages = images.map((image, index) => {
        return (
            <img
                key={index}
                src={image}
                alt={`page ${index + 1}`}
                className={imagesClassName[index]}
            />
        )
    });

    useEffect(() => {
        const newImagesClassName = [...imagesClassName];
        if (lastPage < currentPage) {
            newImagesClassName[lastPage] = "right flip-left";
            newImagesClassName[currentPage] = "right";

            setImagesClassName(newImagesClassName);

            setTimeout(() => {
                newImagesClassName[lastPage] = "left";
                setImagesClassName(newImagesClassName);
            }, 1200);
        } else if (lastPage > currentPage) {
            newImagesClassName[lastPage] = "right";
            newImagesClassName[currentPage] = "right flip-right";

            setImagesClassName(newImagesClassName);

            setTimeout(() => {
                newImagesClassName[lastPage] = "right hidden";
                setImagesClassName(newImagesClassName);
            }, 1200);
        }
    }, [currentPage, lastPage]);

    const handleClick = (valueToChange) => {
        if (clicked) return;

        if (currentPage >= 0 && currentPage < images.length) {
            setClicked(true);
            setTimeout(() => setClicked(false), 1200);
            setLastPage(currentPage);
            setCurrentPage(currentPage + valueToChange);
        }
    }

    return (
        <div className="history-page">
            <NavigationBar  active_page="history"/>
            <img src={homePageImg} alt="home-page yellow background" className="background-image history-page"/>
            <div className="history-book">
                {bookImages}
                <span
                    className={`material-symbols-outlined history-page-arrow left-arrow ${currentPage === 0 ? 'hidden' : ''}`}
                    onClick={() => handleClick(-1)}>
                    arrow_back_ios_new
                </span>
                <span
                    className={`material-symbols-outlined history-page-arrow right-arrow ${currentPage === images.length - 1 ? 'hidden' : ''}`}
                    onClick={() => handleClick(1)}>
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}