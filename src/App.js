import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Pages 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Team from './components/pages/Team';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Ad from './components/pages/Ad';


class App extends Component {
    render() {
        return (
            <Router>
                <PageWrapper>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/portfolio" component={Portfolio}/>
                    <Route exact={true} path="/team" component={Team}/>
                    <Route exact={true} path="/services" component={Services}/>
                    <Route exact={true} path="/contact" component={Contact}/>
                    <Route exact={true} path="/ad" component={Ad}/>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact={true} path="/registration" component={Registration}/>
                    <Redirect to="/" />
                </PageWrapper>
                <Footer/>
            </Router>
        );
    };
};

export default App;
