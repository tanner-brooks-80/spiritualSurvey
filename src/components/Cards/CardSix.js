import React from 'react';
import './Cards.css';

class CardSix extends React.Component {
  
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
   
   
  onClick = () => {
    let radios = document.getElementsByTagName('input');
    if ( radios[0].checked || radios[1].checked ) {
      this.props.onRouteChange('CardSeven');
      this.props.updateQuestion6("5cb8d878af09d60d21e68e24", this.state.selectedOption);
    } else {
    	alert('please select an item:)');
    }
}
   
   
   
    render() {
        return(
          <div className='br3 mw8 shadow-5 center'>
            <div>
                <h3 className='' >Question 6:  Select the statement that you more closely relate to.</h3>
                  <ul>
                  <li>
                    <input 
                      type="radio" 
                      name="radio2" 
                      id="Prophetic" 
                      value="1" 
                      checked={ this.state.selectedOption === "Prophetic"}
                      onChange={ this.handleOptionChange }
                      />
                    <label htmlFor="Prophetic">I am told I have a lot of discernment of the spiritual things.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                  
                  <li>
                    <input 
                      type="radio" 
                      name="radio2" 
                      id="Teacher" 
                      value="1" 
                      checked={ this.state.selectedOption === "Teacher"}
                      onChange= { this.handleOptionChange }
                      />
                    <label className="" htmlFor="Teacher">Being biblical is essential in the way I live my life.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                </ul>
                    <div className="flex items-center justify-center pa5">
                      <a onClick={() => this.props.onRouteChange('CardFive') } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                          <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor"}} >
                            <title>chevronLeft icon</title>
                            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                          </svg>
                        <span className="pl1">Back</span>
                      </a>
                      <a onClick={ this.onClick } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
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

export default CardSix;