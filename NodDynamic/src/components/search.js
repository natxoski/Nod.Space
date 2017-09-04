import React from 'react';
import FilterForm from './filterform';
import PlanetsList from './planetslist';

class Search extends React.Component {
    render(){
        const style={
            marginTop:'20px'
        };
        return(
            <div className='container' style={style}>
                <div className='row'>
                    <div className='col-4'>
                        <FilterForm />
                    </div>
                    <div className='col-8 '>
                        <PlanetsList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;