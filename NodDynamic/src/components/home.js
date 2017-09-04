import React from 'react';
import Jumbotron from './jumbotron';
import Carousel from './carousel';
import Testimonials from './testimonials';
class Home extends React.Component {
    render(){
        return(
            <div>
                <Jumbotron />
                <Carousel />
                <Testimonials />
            </div>
        );
    }
}

export default Home;