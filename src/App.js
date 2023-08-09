import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
import 'bulma/css/bulma.css';

function App () {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <div className="section">
                    <div className="columns is-justify-content-space-between">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                img={AlexaImg} 
                                altImg="Alexa logo"
                                desc="Alexa is Amazon's cloud-based voice service platform that powers an entire smart device ecosystem"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                img={CortanaImg} 
                                altImg="Cortana logo" 
                                desc="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                img={SiriImg} 
                                altImg="Siri logo"
                                desc="Siri is Apple's virtual assistant used as an easy way to make calls, texts, use apps and get things done using your voice" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
