import "./Shop.css";
import NavigationBar from "../../navigationBar/NavigationBar";
import ShopItem from "./ShopItem/ShopItem";
import trixStickers from "../../assets/images/shop/Stickers Trix.webp";
import ocStickers from "../../assets/images/shop/Stickers OC.webp";
import fvStickers from "../../assets/images/shop/Stickers FV.webp";
import sigpeDacimStickers from "../../assets/images/shop/Stickers SIGPE DACIM.webp";
import ebStickers from "../../assets/images/shop/Stickers EB.webp";
import winnersStickers from "../../assets/images/shop/Stickers Winners.webp";
import ebWordsStickers from "../../assets/images/shop/Stickers EB Words.webp";
import ocBracelet from "../../assets/images/shop/Bracelet OC.webp";
import trixBracelet from "../../assets/images/shop/Bracelet TRIX.webp";
import ocTshirt from "../../assets/images/shop/T-Shirt OC.webp";
import trixTshirt from "../../assets/images/shop/T-Shirt TRIX.webp";
import fvTshirt from "../../assets/images/shop/T-Shirt FV.webp";
import ebTshirt from "../../assets/images/shop/T-Shirt EB.webp";
import alumniTshirt from "../../assets/images/shop/T-Shirt Alumni.webp";
import a1Tshirt from "../../assets/images/shop/T-Shirt A1.webp";
import a2Tshirt from "../../assets/images/shop/T-Shirt A2.webp";
import aCjTshirt from "../../assets/images/shop/T-Shirt AIESEC Cluj-Napoca.webp";
import pantsA from "../../assets/images/shop/Pants A.webp";
import pantsFV from "../../assets/images/shop/Pants FV.webp";
import shortsA from "../../assets/images/shop/Shorts A.webp";
import shortsFV from "../../assets/images/shop/Shorts FV.webp";
import packA1 from "../../assets/images/shop/Package A1.webp";
import packA2 from "../../assets/images/shop/Package A2.webp";
import packFV1 from "../../assets/images/shop/Package FV1.webp";
import packFV2 from "../../assets/images/shop/Package FV2.webp";
import aHoodie from "../../assets/images/shop/Hoodie A.webp";
import aCjHoodie from "../../assets/images/shop/Hoodie AIESEC Cj.webp";
import fvHoodie from "../../assets/images/shop/Hoodie FV.webp";
import trixHoodie from "../../assets/images/shop/Hoodie TRIX.webp";
import socksA from "../../assets/images/shop/Socks A.webp";
import socksFV from "../../assets/images/shop/Socks FV.webp";
import boxersA from "../../assets/images/shop/Boxers A.webp";
import boxersFV from "../../assets/images/shop/Boxers FV.webp";
import boxersOC from "../../assets/images/shop/Boxers Naughty.webp";
import bucketHatA from "../../assets/images/shop/Bucket hat A.webp";
import bucketHatFV from "../../assets/images/shop/Bucket hat FV.webp";
import borsetaA from "../../assets/images/shop/Borseta A.webp";
import borsetaFV from "../../assets/images/shop/Borseta FV.webp";
import toteBagA from "../../assets/images/shop/Tote Bag A.webp";
import toteBagFV from "../../assets/images/shop/Tote Bag FV.webp";
import posterFV from "../../assets/images/shop/Poster FV.webp";
import posterTrix from "../../assets/images/shop/TRIX Poster.webp";
import postcardTrix from "../../assets/images/shop/TRIX Postcard.webp";
import photosTrixPack from "../../assets/images/shop/Photos TRIX Pack.webp";
import pandoraBox from "../../assets/images/shop/Mistery Box.webp";

export default function Shop() {
    return (
        <div className="shop-page">
            <NavigationBar active_page="shop"/>
            <div className="shop-content">
                <a
                    href="https://9ykk8z2z34n.typeform.com/to/sW4gEY0w"
                    target="_blank"
                    rel="noreferrer"
                    className="hp-button order-button">
                    Order here
                </a>
                <div className="items-grid">
                    <ShopItem img={trixStickers} title="TRIX Kung Fu Stickers" price="3 RON each - 10 RON pack"/>
                    <ShopItem img={ocStickers} title="OC Naughty Stickers" price="3 RON each - 10 RON pack"/>
                    <ShopItem img={fvStickers} title="Foaie Verde Stickers" price="3 RON each - 10 RON pack"/>
                    <ShopItem img={sigpeDacimStickers} title="SIGPE DACIM Stickers" price="3 RON each - 12 RON pack"/>
                    <ShopItem img={ebStickers} title="EB Breakthrough Stickers" price="3 RON each - 10 RON pack"/>
                    <ShopItem img={winnersStickers} title="Winners Stickers" price="3 RON each - 6 RON both"/>
                    <ShopItem img={ebWordsStickers} title="EB Famous Phrases Stickers" price="13 RON pack"/>
                    <ShopItem img={ocBracelet} title="OC Naughty Bracelet" price="5 RON"/>
                    <ShopItem img={trixBracelet} title="TRIX Kung Fu Bracelet" price="5 RON"/>
                    <ShopItem img={ocTshirt} title="OC Naughty T-Shirt" price="70 RON"/>
                    <ShopItem img={trixTshirt} title="TRIX Kung Fu T-Shirt" price="70-80 RON*"/>
                    <ShopItem img={fvTshirt} title="Foaie Verde T-Shirt" price="70 RON"/>
                    <ShopItem img={ebTshirt} title="EB Breakthrough T-Shirt" price="70 RON"/>
                    <ShopItem img={alumniTshirt} title="Alumni T-Shirt" price="70 RON"/>
                    <ShopItem img={a1Tshirt} title="AIESEC Blue T-Shirt" price="70 RON"/>
                    <ShopItem img={a2Tshirt} title="AIESEC Black T-Shirt" price="70 RON"/>
                    <ShopItem img={aCjTshirt} title="AIESEC Cluj-Napoca T-Shirt" price="70 RON"/>
                    <ShopItem img={pantsA} title="AIESEC Pants" price="70 RON"/>
                    <ShopItem img={pantsFV} title="Foaie Verde Pants" price="70 RON"/>
                    <ShopItem img={shortsA} title="AIESEC Shorts" price="70 RON"/>
                    <ShopItem img={shortsFV} title="Foaie Verde Shorts" price="70 RON"/>
                    <ShopItem img={packA1} title="Package AIESEC Long" price="120 RON"/>
                    <ShopItem img={packA2} title="Package AIESEC Short" price="120 RON"/>
                    <ShopItem img={packFV1} title="Package Foaie Verde Long" price="120 RON"/>
                    <ShopItem img={packFV2} title="Package Foaie Verde Short" price="120 RON"/>
                    <ShopItem img={aHoodie} title="AIESEC Hoodie" price="110 RON"/>
                    <ShopItem img={aCjHoodie} title="AIESEC Cluj-Napoca Hoodie" price="110 RON"/>
                    <ShopItem img={fvHoodie} title="Foaie Verde Hoodie" price="110 RON"/>
                    <ShopItem img={trixHoodie} title="TRIX Kung Fu Hoodie" price="110 RON"/>
                    <ShopItem img={socksA} title="AIESEC Socks" price="25 RON"/>
                    <ShopItem img={socksFV} title="Foaie Verde Socks" price="25 RON"/>
                    <ShopItem img={boxersA} title="AIESEC Boxers" price="40 RON"/>
                    <ShopItem img={boxersFV} title="Foaie Verde Boxers" price="40 RON"/>
                    <ShopItem img={boxersOC} title="OC Naughty Boxers" price="50 RON"/>
                    <ShopItem img={bucketHatA} title="AIESEC Bucket Hat" price="45 RON"/>
                    <ShopItem img={bucketHatFV} title="Foaie Verde Bucket Hat" price="45 RON"/>
                    <ShopItem img={borsetaA} title="AIESEC Borseta" price="40 RON"/>
                    <ShopItem img={borsetaFV} title="Foaie Verde Borseta" price="40 RON"/>
                    <ShopItem img={toteBagA} title="AIESEC Tote Bag" price="35 RON"/>
                    <ShopItem img={toteBagFV} title="Foaie Verde Tote Bag" price="35 RON"/>
                    <ShopItem img={posterFV} title="Foaie Verde Poster" price="25 RON"/>
                    <ShopItem img={posterTrix} title="TRIX Poster" price="25 RON"/>
                    <ShopItem img={postcardTrix} title="TRIX Postcard" price="5 RON"/>
                    <ShopItem img={photosTrixPack} title="Photos TRIX Pack(5 photos)" price="10 RON"/>
                    <ShopItem img={pandoraBox} title="Pandora Box" price="150 RON"/>
                </div>
            </div>
        </div>
    )
}