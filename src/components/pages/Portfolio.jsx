import React, {Component} from 'react';
import PortfolioItem from '../Common/PortfolioItem';

// Images
import img1 from '../assets/img/Adver1.webp';

const portfolio = [
    {
        title: 'Outdoor Advertising',
        subtitle: 'Book your ad space',
        image: img1
    }, {
        title: 'Digital Marketing',
        subtitle: 'Showcase your ad on worlds most preffered medium.',
        image: img1
    }, {
        title: 'NewsPaper Advertising',
        subtitle: 'Book your ad space',
        image: img1
    }, {
        title: 'Radio Advertising',
        subtitle: 'Ads on leading radio stations',
        image: img1
    }, {
        title: 'Telivison Advertising',
        subtitle: 'Now TV advertising is easy',
        image: img1
    }, {
        title: 'Cinenma Advertising',
        subtitle: 'Showcase your AD on 70mm screen',
        image: img1
    }
]

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Some of our advertisment</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

export default Portfolio;