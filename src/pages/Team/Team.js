import "./Team.css";
import NavigationBar from "../../navigationBar/NavigationBar";
import nicolaeMogage from "../../assets/images/Nicolae_Mogage.webp";
import nicoletaSomlea from "../../assets/images/Nicoleta_Somlea.webp";
import kiraMoglan from "../../assets/images/Kira_Moglan.webp";
import ioanaOltean from "../../assets/images/Ioana_Oltean.webp";
import adaPopescu from "../../assets/images/Ada_Popescu.webp";
import anaCiosu from "../../assets/images/Ana_Ciosu.webp";
import ovidiuHudusan from "../../assets/images/Ovi_Hudusan.webp";
import mikaAlexandru from "../../assets/images/Mika_Alexandru.webp";
import ionelaComsa from "../../assets/images/Ionela_Comsa.webp";
import catalinaRusu from "../../assets/images/Catalina_Rusu.webp";
import dianaFarcas from "../../assets/images/Diana_Farcas.webp";
import dianaCampan from "../../assets/images/Diana_Campan.webp";
import andreiNeamtu from "../../assets/images/Andrei_Neamtu.webp";
import eliPotcoava from "../../assets/images/Eli_Potcoava.webp";
import paulaNegoias from "../../assets/images/Paula_Negoias.webp";
import PeopleCarousel from "./PeopleCarousel/PeopleCarousel";

export default function Team() {
    const ebImages = [
        {
            name: "Kira Moglan",
            image: kiraMoglan,
            position: "LCP"
        },
        {
            name: "Ioana Oltean",
            image: ioanaOltean,
            position: "LCVP MXP"
        },
        {
            name: "Ada Popescu",
            image: adaPopescu,
            position: "LCVP EwA&PR"
        },
        {
            name: "Diana Farcas",
            image: dianaFarcas,
            position: "LCVP oGT"
        },
        {
            name: "Andrei Neamtu",
            image: andreiNeamtu,
            position: "LCVP Marketing"
        },
        {
            name: "Diana Campan",
            image: dianaCampan,
            position: "LCVP F&L"
        },
        {
            name: "Eli Potcoava",
            image: eliPotcoava,
            position: "LCVP oGV"
        },
        {
            name: "Paula Negoias",
            image: paulaNegoias,
            position: "LCVP iGV"
        }
    ];
    const ocImages = [
        {
            name: "Ana Maria Ciosu",
            image: anaCiosu,
            position: "OCP"
        },
        {
            name: "Nicolae Mogage",
            image: nicolaeMogage,
            position: "OCVP DXP"
        },
        {
            name: "Nicoleta Somlea",
            image: nicoletaSomlea,
            position: "OCVP DXP"
        },
        {
            name: "Catalina Rusu",
            image: catalinaRusu,
            position: "OCVP Marketing"
        },
        {
            name: "Ovidiu Hudusan",
            image: ovidiuHudusan,
            position: "OCVP Sales"
        },
        {
            name: "Mika Alexandru",
            image: mikaAlexandru,
            position: "OCVP Sales"
        },
        {
            name: "Ionela Comsa",
            image: ionelaComsa,
            position: "OCVP F&L"
        }
    ];

    return (
        <div className="team-page">
            <NavigationBar  active_page="team"/>
            <PeopleCarousel images={ebImages} toAdd={7.5}/>
            <PeopleCarousel images={ocImages} toAdd={8.6}/>
        </div>
    )
}