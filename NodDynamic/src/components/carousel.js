import React from 'react';
import { Link } from 'react-router-dom';

class Carousel extends React.Component{
    render(){
        return (
            <div>
                <p id='latestdeals'>Latest Deals</p>
                <hr class='my-4' />
                <div id="carouselIndicators" className="carousel slide align-content-center" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouseleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                    
                        <div className="carousel-item active">
                            <a href=''><img className="d-block img-fluid" src="http://via.placeholder.com/1240x400" alt="First slide"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Mercury</h3>
                                <p>Super faboulous planet</p>
                                <small>Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit.</small>
                            </div>
                        </div>
                    
                    <div className="carousel-item">
                        <a href=''><img className="d-block img-fluid" src="http://via.placeholder.com/1240x400" alt="Second slide"/></a>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Earth</h3>
                            <p>Too mainstream</p>
                            <small>Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.</small>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href=''><img className="d-block img-fluid" src="http://via.placeholder.com/1240x400" alt="Third slide"/></a>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Venus</h3>
                            <p>The Dealbreaker!</p>
                            <small>Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass. The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid.</small>
                        </div>
                    </div>
                    </div>
                
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
            </div>
        );
    }
}

export default Carousel;