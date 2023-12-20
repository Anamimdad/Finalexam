
import profile from './images/image1.png';

function HeroSection() {
    return (
        <div className="container hero-section">
            <div className="row">
                <div className="col col-sm-12 col-md-6 col-lg-6">
                    <h1 className="tittle-section">
                    WEB3MKR REDEDINING
                    </h1>
                    <h3 className="subheading">
                        HOW YOU START
                    </h3>
                    <h1 className="suheading">
                        Unlock the blockchain potential
                        to create web3 application
                    </h1>
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-6">
                    <video src={profile} alt="profile"/>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
