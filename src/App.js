import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';

function App () {
    return (
        <div>
            <h1>Personal Digital Assistants</h1>
            <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImg} altImg="Alexa logo" />
            <ProfileCard title="Cortana" handle="@cortana32" img={CortanaImg} altImg="Cortana logo" />
            <ProfileCard title="Siri" handle="@siri01" img={SiriImg} altImg="Siri logo" />
        </div>
    );
}

export default App;
