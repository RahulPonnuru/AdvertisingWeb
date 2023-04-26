import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/banner.jpg';

// Re-usable componets
import Services from './Services';
import Porfolio from './Portfolio';
import Team from './Team';
import About from './About';
import Client from './Client';
import Contact from './Contact';
import Ad from './Ad';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Advertising Agency!"
                    subtitle="GOOD TO SEE YOU HERE"
                    buttonText="EXPLORE US"
                    link="/services"
                    showButton={true}
                    image={image}/>

                <Services/>

                <Porfolio/>

                {/* <About/> */}

                <Client/>

                <Team/>

                <Contact/>

                <Ad />
            </div>
        );
    };
};

export default Home;