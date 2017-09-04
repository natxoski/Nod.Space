import React from 'react';

class PlanetCard extends React.Component {
        constructor(){
            super();
        }

    render(){
        console.log(this.props.imgSrc);
        const styleImg = {
            height:'auto',
            maxWidth:'100%',
            
//            width:'160px',
//            height:'150px'
        }
        const styleCard = {
            textAlign:'center',
            padding:'0',
            marginLeft:'0',
            marginBottom:'15px'
        }

        return (
            
            <div className="card col-4" style={styleCard}>
                <img className="card-img-top img-fluid"  style={styleImg}  src={ this.props.imgUrl } alt="Planet image" />
                <div className="card-block">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text"><small className="text-muted">{this.props.price}</small></p>
                </div>
            </div>
            
        );
    }
}

export default PlanetCard;