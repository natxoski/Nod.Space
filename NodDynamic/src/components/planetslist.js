import React from 'react';
import PlanetCard from './planetcard';
import $ from 'jquery';

import Mercury from '../img/mercury.jpg';
import Venus from '../img/venus.jpg';
import Earth from '../img/earth.jpg';
import Jupiter from '../img/jupiter.jpg';
import Mars from '../img/mars.jpg';
import Uranus from '../img/uranus.jpg';
import Saturn from '../img/saturn.jpg';
import Neptune from '../img/neptune.jpg';

class PlanetsList extends React.Component{

    constructor(){
        super();
        this.state = {
            planets:[]
        }
    }

    _fetchPlanets(){
        $.ajax({
            method:'GET',
            url:'/api/planets',
            success: (planets) => {
                this.setState({planets});
            }
        });
    }

    _getPlanetsStatic (){
        const planetsList = [
        {   
            id:1,
            name: 'Mercury',
            meanDistanceFromSun:'57,909,175',
            equatorialRadius:'2,439.64',
            surfaceArea:'75,000,000',
            volume:'6.083exp10', 
            mass:'3.302x10^23',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:1,
            type:'Terrestrial'
        },
        {
            id:2,
            name: 'Venus',
            meanDistanceFromSun:'108,208,930',
            equatorialRadius:'6051.59',
            surfaceArea:'460,000,000',
            volume:'9.28*10^11', 
            mass:'4.8690*10^24',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:2,
            type:'Terrestrial'
        },    
        {
            id:3,
            name: 'Earth',
            meanDistanceFromSun:'149,597,890',
            equatorialRadius:'6378.1',
            surfaceArea:'510,000,000',
            volume:'1.083*10^12', 
            mass:'5.972*10^24',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:1,
            type:'Terrestrial'
        },  
        {
            id:4,
            name: 'Mars',
            meanDistanceFromSun:'227,936,640',
            equatorialRadius:'3,397.00',
            surfaceArea:'140,000,000',
            volume:'1.6318*10^11', 
            mass:'6.4191*10^23',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:0,
            type:'Terrestrial'
        },  
        {
            id:5,
            name: 'Jupiter',
            meanDistanceFromSun:'778,412,010',
            equatorialRadius:'71,492.68',
            surfaceArea:'64,000,000,000',
            volume:'1.431*10^15', 
            mass:'1.8987*10^27',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:0,
            type:'Gas'
        },
        {
            id:6,
            name: 'Saturn',
            meanDistanceFromSun:'1,426,725,400',
            equatorialRadius:'60,267.14',
            surfaceArea:'44,000,000,000',
            volume:'8.27*10^14', 
            mass:'5.6851*10^26',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:0,
            type:'Gas'
        },
        {
            id:7,
            name: 'Uranus',
            meanDistanceFromSun:'2,870,972,200',
            equatorialRadius:'25,557.25',
            surfaceArea:'8,100,000,000',
            volume:'6.834*10^13', 
            mass:'8.6849*10^25',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:1,
            type:'Ice'
        },
        {
            id:8,
            name: 'Neptune',
            meanDistanceFromSun:'4,498,252,900',
            equatorialRadius:'24,766.36',
            surfaceArea:'7,700,000,000',
            volume:'6.254*10^13', 
            mass:'1.0244*10^26',
            img:'http://via.placeholder.com/640x480',
            BuyRentSold:2,
            type:'Ice'

        }];

        return planetsList;
        
        
    }

    _getPlanets(){
        let planetslist = this.state.planets;
            
        let array = planetslist.map((planet,index)=>{
           /*
            switch(index){
                case 0: return (<PlanetCard name={planet.name} imgUrl={Mercury} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 1: return (<PlanetCard name={planet.name} imgUrl={Venus} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 2: return (<PlanetCard name={planet.name} imgUrl={Earth} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 3: return (<PlanetCard name={planet.name} imgUrl={Mars} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 4: return (<PlanetCard name={planet.name} imgUrl={Jupiter} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 5: return (<PlanetCard name={planet.name} imgUrl={Saturn} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 6: return (<PlanetCard name={planet.name} imgUrl={Uranus} price={planet.meanDistanceFromSun} key={planet.id} />); break;
                case 7: return (<PlanetCard name={planet.name} imgUrl={Neptune} price={planet.meanDistanceFromSun} key={planet.id} />); break;
            }
            */
            return (<PlanetCard name={planet.name} imgUrl={planet.img} price={planet.meanDistanceFromSun} key={planet.id} />); 
        });
        
        console.log(array);
        
        return array;
    }

    _getPlanetsFound(planetCount){
        if (planetCount === 0 || planetCount === undefined) {
            return 'No planets found... yet';
        } else if (planetCount===1) {
            return '1 planet';
        } else {
            return `${planetCount} planets found`;
        }
    }

    componentWillMount(){

        this.setState({planets: this._getPlanetsStatic()});
        
    }

    render(){
       let planetNodes = this._getPlanets();
        return(
            <div>
                <div className='row'>
                    <h4 className='text-muted'>{this._getPlanetsFound(planetNodes.length)}</h4>
                </div>
                <div className='row'>
                    <div className='card-deck'>    
                        {planetNodes}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        //this._timer=setInterval(()=>this._fetchPlanets(),5000);
    }

    componentWillUnmount(){
        //clearInterval(this._timer);
    }

}

export default PlanetsList;
