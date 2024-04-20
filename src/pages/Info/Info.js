import "./Info.css";
import NavigationBar from "../../navigationBar/NavigationBar";
import meme1 from "../../assets/images/meme1.png";
import meme2 from "../../assets/images/meme2.jpg";
import asian1 from "../../assets/images/asian1.jpg";
import asian2 from "../../assets/images/asian2.jpg";
import gala1 from "../../assets/images/gala1.jpg";
import gala2 from "../../assets/images/gala2.jpg";

export default function Info() {
    return (
        <div className="info-page">
            <NavigationBar active_page="info"/>
            <div className="center-wrapper">
                <div className="content-wrapper">
                    <div>
                        <h1 className="welcome-text subsection">Welcome dear fighter to our lovely booklet of what to you'll find
                            at TRIX Kung Fu.</h1>
                        <p className="container">TRIX is the local conference of AIESEC in Cluj-Napoca, where you get to
                            experience what it means to be part of the Foaie Verde culture.
                            <br/><br/>
                            TRIX is more than just a conference, it is a life changing experience if you fully embrace
                            it.
                            <br/><br/>
                            Now.. why TRIX KUNG FU?
                            <br/><br/>
                            KUNG FU is a type of chinese artial marts, which refer to any study or practice that
                            requires
                            patience, energy and time to complete.
                            <br/><br/>
                            Similar to what happens in AIESEC or in real life? Yes! You know that getting better at your
                            ability to develop your leadership and facilitate exchange, requires effort, consistency and
                            patience.</p>
                    </div>
                    <div className="expect-elem">
                        <h2 className="subsection">Some expectations in order for you to enjoy the conference at its
                            fullest.</h2>
                        <div className="container">
                            <p>Be respectful with each other and do not cross the limits imposed by the others, either
                                they are delegates, conference team or staff from the venue.</p>
                            <p>There are specially designated smoking places, so refrain from smoking in any other areas
                                and use the ashtrays there, please do not throw your cigarette bud on the ground.</p>
                            <p>Make sure to clean after yourself, this applies also during parties, where be careful at
                                your drinking limits and do not surpass them.</p>
                            <p>Be present at every session and activity, you are here to learn and enjoy, sleep can come
                                after the memories are made.</p>
                            <p>Have a lot of fun at the parties and interact with as many people as possible.</p>
                            <p>Free alcohol in all possible and impossible combinations, so save your money to buy some
                                goodies from the shop.</p>
                            <p>For any <span className="imp-thing">suggestions, questions or concerns</span> regarding
                                the conference, venue, logistics don't hesitate to contact the <span
                                    className="imp-thing">DXP Team (Nicu or Nico)</span> or anybody from OC Naughty. For
                                anything about sessions' content, agenda approach <span className="imp-thing">EB Breakthrough</span>.
                            </p>
                        </div>
                    </div>
                    <div className="bring-elem">
                        <h2 className="subsection">In the rush of packaging, don't forget to bring this items we found
                            essential for you.</h2>
                        <div className="container">
                            <p><span className="imp-thing">An umbrella or a raincoat</span> because catching a cold is
                                the
                                opposite of having fun.
                            </p>
                            <p>Your <span className="imp-thing">personal cup/bottle</span> because who wants to search
                                for
                                a cup when rushing for a drink? </p>
                            <p>The most annoying thing is when you pressing the photo button and the battery dies, so
                                check
                                to have <span className="imp-thing">charges for your devices</span>.</p>
                            <p>Your <span className="imp-thing">ID</span> so when you arrive you won't sing "Pierdut
                                Buletin".</p>
                            <p><span className="imp-thing">Warm clothes</span> to be always cozy and prepared for
                                partying
                                hard.</p>
                            <p>Who wants to have back pain and watch others dance while he takes another shot? Bring
                                a <span
                                    className="imp-thing">pillow or blanket</span> for the plenary.</p>
                            <p>And lastly, you want to impress the other people around you, so get your craziest <span
                                className="imp-thing">themed party outfits</span>.</p>
                        </div>
                    </div>
                    <div className="conf-elem">
                        <h2 className="subsection">Dive in even deeper to see how you'll have fun at the
                            conference.</h2>
                        <div className="container conf-elem-container">
                            <span>Sugar cubes</span>
                            <span>Karate wall</span>
                            <span>Fun team</span>
                            <span>Roll calls</span>
                            <span>Boat Race</span>
                            <span>Intermediar</span>
                            <span>Veteran</span>
                            <span>Free alcohol</span>
                        </div>
                    </div>
                    <div className="parties">
                        <h2 className="subsection">How to dress, what to drink, why to be there? The parties are here to
                            help you find the
                            answers.</h2>
                        <div className="container">
                            <div className="meme-party">
                                <h3 className="subsection">Meme party</h3>
                                <div className="party-content reverse-content">
                                    <div className="party-pictures-container">
                                        <img className="party-picture picture1" src={meme1} alt="meme1"/>
                                        <img className="party-picture picture2" src={meme2} alt="meme2"/>
                                    </div>
                                    <div className="party-text-container">
                                        <p>Wear your funniest meme outfit and get ready to laugh, dance and drink.</p>
                                        <p><span className="imp-thing">DRESS CODE:</span> creative, crazy, funny, you
                                            have the freedom to dress as any meme you like.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="asian-party">
                                <h3 className="subsection">Asian party</h3>
                                <div className="party-content">
                                    <div className="party-pictures-container">
                                        <img className="party-picture picture1" src={asian1} alt="asian1"/>
                                        <img className="party-picture picture2" src={asian2} alt="asian2"/>
                                    </div>
                                    <div className="party-text-container">
                                        <p>We move the fashion trends from west to east, put your mind at work and come
                                            with the best combinations the world have seen.</p>
                                        <p><span className="imp-thing">DRESS CODE WOMEN:</span> hand fan, red lipstick,
                                            kimonos, floral dresses.</p>
                                        <p><span className="imp-thing">DRESS CODE MEN:</span> kimono shirts, loose
                                            t-shirt & pants, even suits.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gala">
                                <h3 className="subsection">Cherry Blossom Gala</h3>
                                <div className="party-content reverse-content">
                                    <div className="party-pictures-container">
                                        <img className="party-picture picture1" src={gala1} alt="asian1"/>
                                        <img className="party-picture picture2" src={gala2} alt="asian2"/>
                                    </div>
                                    <div className="party-text-container">
                                        <p>If you wanted to experience this season and did not have time, now is you
                                            chance to fully own the moment.</p>
                                        <p><span className="imp-thing">DRESS CODE:</span> red, gold, white, black.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}