import React, {Component} from 'react';

import SingleService from '../Common/SingleService';

const services = [
    {
        title: "Branding",
        description: "This involves creating a brand identity for a product or service, which includes designing a logo, selecting a color palette, and developing a brand message.",
        icon: 'fa-shopping-cart'
    }, {
        title: "Creative Services",
        description: "Advertising agencies offer a range of creative services, including copywriting, graphic design, video production, and web design.",
        icon: 'fa-laptop'
    }, {
        title: "Social Media Management",
        description: "Advertising agencies help businesses manage their social media accounts, create content, and engage with followers.",
        icon: 'fa-lock'
    },{
        title: "Market research",
        description: "This involves gathering and analyzing data about a product or service, its target audience, and the competition in the market.",
        icon: 'fa-hourglass-half'
    },{
        title: "Media planning and buying",
        description: "This involves determining the best channels and platforms to reach the target audience and negotiating ad placements and rates with media companies.",
        icon: 'fa-puzzle-piece'
    },{
        title: "Public relations",
        description: "This involves managing the reputation of a product or service and handling media relations, such as press releases, media events, and crisis management.",
        icon: 'fa-users'
    },{
        title: "Creative services",
        description: "This involves developing visual and written content for advertisements, such as graphic design, copywriting, and video production.",
        icon: 'fa-id-card'
    },{
        title: "Digital marketing",
        description: "This involves promoting a product or service through online channels, such as search engine optimization (SEO), pay-per-click (PPC) advertising, email marketing, and social media advertising.",
        icon: 'fa-laptop'
    },{
        title: "Promotions and sponsorships",
        description: "This involves developing and executing promotions and sponsorships that drive sales and brand awareness, such as discounts, contests, and product giveaways.",
        icon: 'fa-hashtag'
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