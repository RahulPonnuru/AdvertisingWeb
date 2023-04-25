import React, {Component} from 'react';

import SingleService from '../Common/SingleService';

const services = [
    {
        title: "Branding",
        description: "Advertising agencies help businesses create a brand identity, including designing logos, creating slogans, and developing brand guidelines.",
        icon: 'fa-shopping-cart'
    }, {
        title: "Creative Services",
        description: "Advertising agencies offer a range of creative services, including copywriting, graphic design, video production, and web design.",
        icon: 'fa-laptop'
    }, {
        title: "Social Media Management",
        description: "Advertising agencies help businesses manage their social media accounts, create content, and engage with followers.",
        icon: 'fa-lock'
    }
];

class Services extends Component {
    render() {
        return (
            <div>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index) => {
                                return <SingleService {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>

            </div>
        );
    };
};

export default Services;