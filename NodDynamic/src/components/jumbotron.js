import React from 'react';
import './jumbotron.css';
import { Link } from 'react-router-dom'; 

class Jumbotron extends React.Component {

    render(){
        const style={
            main: {
                backgroundImage: `url('./img/tyler-van-der-hoeven-357415.jpg') no-repeat top`,
                backgroundSize: '100%',
                textAlign: 'center'
            },
            h1: {
                color:'crimson'
            },
            textWhite:{ 
                color:'white'
            }
        }

        

        return (
            <div className="jumbotron" style={style.main}>
                <h1 className="display-8" style={style.h1}>Find <e><em>YOUR</em></e> special planet <i className='fa fa-rocket' aria-hidden="true"></i></h1>
                <p className="lead">That's one small step for man, one giant leap for mankind.</p>
                <hr className="my-4"/>
                <button className='btn btn-success col-2' style={style.h1}><Link to='/search' style={style.textWhite}>Godspeed</Link></button>
        </div>

        );
    }
}

export default Jumbotron;