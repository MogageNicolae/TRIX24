
export default function BookPage({image, index, imagesClassName}) {
    return (
        <>
            <img
                src={image}
                alt={`page ${index + 1}`}
                className={imagesClassName[index]}
            />
        </>
    )
}