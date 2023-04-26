import React, {Component} from 'react';
import TeamMember from '../Common/TeamMember';

// Images
import img1 from '../assets/team/picture.jpeg.jpg';
import img2 from '../assets/team/Ayush.jpg';
import img3 from '../assets/team/Image1.jpeg';
import img4 from '../assets/team/Prajwal.jpg';

const teamMember = [
    {
        name: 'Ayush Patni',
        title: 'Team Member',
        image: img2
        
    }, {
        name: 'Sahil Bagati',
        title: 'Team Member',
        image: img1
    }, {
        name: 'Rahul Ponnuru',
        title: 'Team Member',
        image: img3
    },{
        name: 'Prajwal Achwale',
        title: 'Team Member',
        image: img4
    }
];

class Team extends Component {
    render() {
        return (
            <div>
                <section class="page-section bg-light" id="team">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div class="row">
                            {teamMember.map((team, index) => {
                                return <TeamMember {...team} key={index}/>
                            })
            }
                        </div>
                        <div class="row">
                            <div class="col-lg-8 mx-auto text-center">
                                <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
                                    corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    };
};

export default Team;