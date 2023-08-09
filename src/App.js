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
                            <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImg} altImg="Alexa logo" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana32" img={CortanaImg} altImg="Cortana logo" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@siri01" img={SiriImg} altImg="Siri logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
