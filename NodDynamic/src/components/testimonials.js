import React from 'react';
import Nasa from '../img/nasa-45067.jpg';
class Testimonials extends React.Component{
    render(){

        const style={
            cardDeck:{
                paddingBottom:'20px'
            },
            cards: {
                background: `url(${Nasa}) no-repeat center`,
                backgroundSize: '100%',
                marginBottom:'2px'
            },
            colorWhite:{
                color: 'white'
            }
        };

        return (
            <div className='container cards' id='testimonials' style={style.cards} >
            <hr className='my-2' />
            <p style={style.colorWhite}>Testimonials</p>
            <hr className='my-6'/>
            <div className="card-deck" style={style.cardDeck}>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">J'onn J'onzz</h4>
                        <p className="card-text">
                            At first I was not sure, but thanks to Nod.Space I managed to rent my planet and go to Earth on holidays. Thanks again!
                        </p>
                        <p className="card-text"><small className="text-muted">Renting his planet</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">Clark Kent</h4>
                        <p className="card-text">After my planet had exploded, I was looking to rent another planet to stay. Thanks to this awesome website, I rented another planet! I know it's not Krypton, but I feel more powerful in Earth. Thanks!</p>
                        <p className="card-text"><small className="text-muted">Rented a planet</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">Galactus</h4>
                        <p className="card-text">I thought it was impossible, but thanks to Nod.Space I have been able to buy another planet!
                            I am waiting for the next shuttle to get there ASAP!</p>
                        <p className="card-text"><small className="text-muted">Bought another planet!</small></p>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Testimonials;