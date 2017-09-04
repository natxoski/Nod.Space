import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"><Link to='/'>Nod.Space</Link></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav mr-auto'>

                        <li className='nav-item'><a className="nav-link" href="#latestdeals">Latest Deals</a></li>
                        <li className=' nav-item'><a className="nav-link" href="#testimonials">Testimonials</a></li>
                        <li className='nav-item'><Link className="nav-link" to="/search">Search</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/contact">Contact Us</Link></li>

                    </ul>

                    <form className="form-inline">
                        <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Login</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#signupModal">SignUp</button>
                    </form>
                    {/*
                    <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="signupModalLabel">Sign Up form</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Ok!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                </div>
            </nav>
        );
    }
}

export default NavBar;