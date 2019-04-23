import React from 'react';
import './Cards.css';

class CardOne extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      selectedOption: ''
    }
  }
  
  
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.id
    });
  };
  
  
  handleFormSubmit = (formSubmitEvent) => {
  formSubmitEvent.preventDefault();

  console.log('You have selected:', this.state.selectedOption);
}




  // isChecked = () => {
  //   var radios = document.getElementsByTagName('input');
  //     for (let i = 0; i < radios.length; i++) {
  //       if (radios.type === 'radio' && radios.checked) {
  //         this.props.onRouteChange('CardTwo');
  //         this.props.onQuestion1(this.state.selectedOption);
  //         this.props.updateQuestion1("5cb9e45caebc7408683ed94f", this.state.selectedOption);
  //     } 
  //   }
  // }

  
  
  
  onClick = () => {
    let radios = document.getElementsByTagName('input');
    if ( radios[0].checked || radios[1].checked ) {
      this.props.onRouteChange('CardTwo');
      this.props.onQuestion1(this.state.selectedOption);
      this.props.updateQuestion1("5cb8d878af09d60d21e68e24", this.state.selectedOption);
      // this.props.updateDB("5cb9e45caebc7408683ed94f", this.state.selectedOption);
      console.log('You have selected:', this.state.selectedOption);
    } else {
    	alert('please select an item:)');
    }
}
  
  
  

  // br3 mw8 shadow-5 center
  // <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//   <div className='db center mw0 tc black mt4 container'>
   
    render() {
        return(
          <div className='br3 mw8 shadow-5 center'>
            <div>
                <h3 className='' >Question 1:  Select the statement that you more closely relate to.</h3>
                  <ul>
                  <li>
                    <input 
                      type="radio" 
                      name="radio1" 
                      id="Apostolic" 
                      value="1" 
                      checked={ this.state.selectedOption === "Apostolic"}
                      onChange={ this.handleOptionChange }
                      />
                    <label className='' htmlFor="Apostolic">I seek to align myself with apostolic leaders and movements.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                  
                  <li>
                    <input 
                      type="radio" 
                      name="radio1" 
                      id="Pastoral" 
                      value="1" 
                      checked={ this.state.selectedOption === "Pastoral"}
                      onChange= { this.handleOptionChange }
                      />
                    <label className="" htmlFor="Pastoral">I like to walk out my problems with people.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                </ul>
                    <div onClick={ this.onClick } className="flex items-center justify-center pa5" onSubmit={this.handleFormSubmit}>
                      <a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
                        <span className="pr1">Next</span>
                        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: "currentcolor"}}>
                          <title>chevronRight icon</title>
                          <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                        </svg>
                      </a>
                </div>
            </div>
          </div>
        )
    }
    
}

export default CardOne;