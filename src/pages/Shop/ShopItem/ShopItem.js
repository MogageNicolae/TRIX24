import "./ShopItem.css"

export default function ShopItem({img, title, price}) {
    return (
        <div className="shop-item">
            <img src={img} alt={title} className="shop-item-image"/>
            <h3 className="shop-item-title shop-item-text">{title}</h3>
            <p className="shop-item-price shop-item-text">{price}</p>
        </div>
    );
}