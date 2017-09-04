import React from 'react';
import { Link } from 'react-router-dom';

class FooterBar extends React.Component {

    render(){

        const style={
            color: 'white',
            backgroundColor: '#333333'
        };

        return (
        <footer className='container' style={style} >
            <div className='row'>
                <div className='col-6 my-2 offset-1'>
                    <span className=''>2/50 Bridge St, Sydney, 2000, Australia</span>
                </div>
                <div className='col-2 my-2'>
                    <span> 02.1111.2222 </span>
                </div>
                <div className='col-2 my-2'>
                    <span> <Link to='/contact'>Contact Us</Link></span>
                </div>
            </div>
            
            <hr className='my-1' />
            
            <div className='row'>
                <div className='col-3 offset-1'>
                    <div className='row'>
                        <div className='col-12'>
                            <header>Our Social Media</header>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 my-2'>
                            <a href=''><i className='fa fa-facebook fa-2x'></i></a>
                        </div>
                        <div className='col-6 my-2'>
                            <a href=''><i className='fa fa-twitter fa-2x'></i></a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 my-2'>
                            <a href=''><i className='fa fa-linkedin fa-2x'></i></a>
                        </div>
                        <div className='col-6 my-2'>
                            <a href=''><i className='fa fa-youtube fa-2x'></i></a>
                        </div>
                    </div>        
                </div>

                <div className='col-7'>
                    <div className='row'>
                        <div className='col-12'>
                            <header>About Nod.Space</header>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p> Nod.Space is an online platform connecting people who wants to buy, rent or sell planets in the outerspace. All our resources are at your fingertips!
                                No matter what you’re after, Nod has your planet property needs covered.</p>
                        </div>
                    </div>        
                </div>
            </div>
   
            <hr className='my-1' />
   
                <div className='row'>
                    <div className='col-12'>
                        <p> &copy;2017 - Ignacio Garcia Villanueva</p>
                    </div>
                </div>

            </footer>
        );
    }
}

export default FooterBar;