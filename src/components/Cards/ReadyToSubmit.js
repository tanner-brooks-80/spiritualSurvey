import React from 'react';
import './Cards.css';

class ReadyToSubmit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }
  

  
  
  
  onClick = () => {
    this.props.onRouteChange('Submit');
  }
  

   
    render() {
        return(
          <div className='br3 mw8 shadow-5 center'>
            <div>
                <h3 className='' >Ready To Submit Answers???</h3>
                    <div className="flex items-center justify-center pa5">
                      <a onClick={() => this.props.onRouteChange('CardTwo') } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                          <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor"}} >
                            <title>chevronLeft icon</title>
                            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                          </svg>
                        <span className="pl1">Back</span>
                      </a>
                      <a onClick={ this.onClick } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
                        <span className="pr1">Submit</span>
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

export default ReadyToSubmit;