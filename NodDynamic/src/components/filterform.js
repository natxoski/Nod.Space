import React from 'react';
import SingleInput from './singleinput';
import Select from './select';

class FilterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            operationRangeSelection:'Buy',
            operationOptions:['Buy','Rent','Sell'],
            planetName:'',
            distanceRangeSelection:'Choose your distance range',
            distanceOptions:['0-500M','500M-1000M','>1000M'],
            planetTypeSelection:'Choose your planet type',
            planetTypeOptions:['Terrestrial','Gas','Ice'],
            priceRangeSelection:'Choose your price range',
            priceOptions:['<2M','2M-5M','>5M']
        };
        
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleClearForm=this.handleClearForm.bind(this);

        this.handleOperationRangeSelect=this.handleOperationRangeSelect.bind(this);
        this.handleDistanceRangeSelect=this.handleDistanceRangeSelect.bind(this);
        this.handlePlanetTypeSelect=this.handlePlanetTypeSelect.bind(this);
        this.handlePriceRangeSelect=this.handlePriceRangeSelect.bind(this);
    }

    handleFormSubmit(e){
        e.preventDefault();
        const formPayload = {
            operationRangeSelection: this.state.operationRangeSelection,
            planetName: this.state.planetName,
            distanceRangeSelection: this.state.distanceRangeSelection,
            planetTypeSelection:this.state.planetTypeSelection, 
            priceRangeSelection:this.state.priceRangeSelection   
        };
        alert(`Form submitted to check:\n
        ${formPayload.operationRangeSelection}\n
        ${formPayload.operationRangeSelection}\n
        ${formPayload.distanceRangeSelection}\n
        ${formPayload.planetTypeSelection}\n
        ${formPayload.priceRangeSelection}\n
        `);
        this.handleClearForm(e);
    }

    handleOperationRangeSelect(e) {
        this.setState({ operationRangeSelection: e.target.value });
    }

    handlePlanetNameChange(e) {
        e.preventDefault();
        this.setState({ planetName: e.target.value });
    }

    handleDistanceRangeSelect(e) {
        this.setState({ distanceRangeSelection: e.target.value });
    }

    handlePlanetTypeSelect(e) {
        this.setState({ planetTypeSelection: e.target.value });
    }

    handlePriceRangeSelect(e) {
        this.setState({ priceRangeSelection: e.target.value });
    }


    handleClearForm(e){
        e.preventDefault();
        this.setState({
            operationRangeSelection:'Buy',
            planetName:'',
            distanceRangeSelection:'0-500M',
            planetTypeSelection:'Terrestrial',
            priceRangeSelection:'<2M'
        });
    }



    render(){

        return(
            <div className='container'>
            <form className="col-12" onSubmit={this.handleFormSubmit}>
                <div className='row'>
                    <div className='col-12'>
                        <h5>Planet Filters</h5>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <Select
                            name={'operationRange'}
                           
                            controlFunc={this.handleOperationRangeSelect}
                            options={this.state.operationOptions}
                            selectedOption={this.state.operationRangeSelection} />
                    </div>
                </div>

              

                <div className='row'>                    
                    <div className='col-12'>
                        <SingleInput
                            inputType={'text'}
                            title={'Planet name'}
                            name={'name'}
                            controlFunc={this.handlePlanetNameChange}
                            content={this.state.planetName}
                            placeholder={'Planet name?'} />
                    </div>
                </div>

              

                <div className='row'>                    
                    <div className='col-12'>
                        <Select
                            name={'distanteRange'}
                            placeholder={'Choose your distance range'}
                            controlFunc={this.handleDistanceRangeSelect}
                            options={this.state.distanceOptions}
                            selectedOption={this.state.distanceRangeSelection}/>
                    </div>
                </div>

              

                <div className='row'>                    
                    <div className='col-12'>
                        <Select
                            name={'type Range'}
                            placeholder={'Planet type'}
                            controlFunc={this.handlePlanetTypeSelect}
                            options={this.state.planetTypeOptions}
                            selectedOption={this.state.planetTypeSelection} />
                    </div>
                </div>
                

                <div className='row'>                    
                    <div className='col-12'>
                        <Select
                            name={'priceRange'}
                            placeholder={'Price Range'}
                            controlFunc={this.handlePriceRangeSelect}
                            options={this.state.priceOptions}
                            selectedOption={this.state.priceRangeSelection} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <input type="submit" className="btn btn-primary float-right" value="Submit"/>
                    </div>
                    <div className='col-6'>
                        <button className="btn btn-link float-left" onClick={this.handleClearForm} > Clear form </button>
                    </div>
                </div>
            </form>
            </div>
        );
    }
    

}

export default FilterForm;