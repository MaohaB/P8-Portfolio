import Aboutcontainer from '../components/Aboutcontainer'
import CVSection from '../components/CVSection'
import "../pages/HomePage/about.scss";

const About = () => {
    return (
        <div className="About">
            <Aboutcontainer />
            <CVSection />
        </div>
    );
} ;

export default About;  