import React from 'react';

import SingleInput from './singleinput';
import Select from './select';
import TextArea from './textarea';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:''
        };
        
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleClearForm=this.handleClearForm.bind(this);

        
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleMessageChange=this.handleMessageChange.bind(this);
    }

    handleFormSubmit(e){
        e.preventDefault();
        const formPayload = {
            from: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        alert(`Form submitted to check:\n
        ${formPayload.from}\n
        ${formPayload.email}\n
        ${formPayload.message}\n
        `);
        this.handleClearForm(e);
    }
    handleClearForm(e){
        this.setState({
            name: '',
            email:'',
            message:''
        });
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    render(){
        const style={
            textAlign:'center'
        };
        return(
            <form className="container my-4" onSubmit={this.handleFormSubmit}>
                <div className='row'>
                    <div className='col-4'>
                        <h5> Contact Us </h5>
                        
                    </div>
                    <div className='col-8'>
                        
                    </div>
                </div>
            
                
                <hr className='my-4' />

                <div className='row'>
                    <div className='col-12'>
                        <SingleInput
                            inputType={'text'}
                            title={'Full name'}
                            name={'name'}
                            controlFunc={this.handleNameChange}
                            content={this.state.name}
                            placeholder={'ex: John Doe'} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>            
                        <SingleInput
                            inputType={'email'}
                            title={'Email'}
                            name={'email'}
                            controlFunc={this.handleEmailChange}
                            content={this.state.email}
                            placeholder={'ex: email@email.com'} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <TextArea
                            title={'Message'}
                            rows={5}
                            resize={false}
                            content={this.state.message}
                            name={'MessageInfo'}
                            controlFunc={this.handleMessageChange}
                            placeholder={'Enter your message'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 offset-4' style={style}>
                        <button type="submit" className="btn btn-primary" > 
                            Send <i className='fa fa-rocket' aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
    
}

export default ContactForm;