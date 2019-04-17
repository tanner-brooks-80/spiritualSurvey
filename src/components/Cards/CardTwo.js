// import React from 'react';
// import './Cards.css';


// class CardTwo extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       route: ''
//     }
//   }


//     render() {
//         return (
//             <div className='db center mw0 tc black mt4 container'>
//                 <div className="" id="demoForm">
//                     <h3 className='' >Question 2:  Select the statement that you more closely relate to.</h3>
//                     <div className="">
//                         <div>
//                                 <div className="">
//                                     <label className="" htmlFor="exampleRadios1">
//                                     <input className="" type="radio" name="radio1" id="Apostolic" value="1"/>
//                                     <span>I ask God specific questions to get specific answers. </span>
//                                     </label>
//                                 </div>
//                         </div>
//                         <div>
//                                 <div className="">
//                                     <input className="" type="radio" name="radio1" id="Pastoral" value="1"/>
//                                     <label className="" htmlFor="exampleRadios2">
//                                         I like to articulate truth and make it practical for people to understand.
//                                     </label>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
                    
//                     <div className="flex items-center justify-center pa4">
//                       <a onClick={() => this.props.onRouteChange('CardOne') } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
//                           <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor"}} >
//                             <title>chevronLeft icon</title>
//                             <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
//                           </svg>
//                         <span className="pl1">Back</span>
//                       </a>
//                       <a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
//                         <span className="pr1">Next</span>
//                         <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: "currentcolor"}}>
//                           <title>chevronRight icon</title>
//                           <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
//                         </svg>
//                       </a>
//                 </div>
//             </div>
//         )
//     }
// }



import React from 'react';
import './Cards.css';

class CardTwo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      selectedOption: ''
    }
  }

   
   
    render() {
        return(
          <div className='br3 mw8 shadow-5 center'>
            <div>
                <h3 className='' >Question 2:  Select the statement that you more closely relate to.</h3>
                  <ul>
                  <li>
                    <input type="radio" name="radio2" id="Apostolic" value="1"/>
                    <label htmlFor="Apostolic">I ask God specific questions to get specific answers.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                  
                  <li>
                    <input className="" type="radio" name="radio2" id="Pastoral" value="1"/>
                    <label className="" htmlFor="Pastoral">I like to articulate truth and make it practical for people to understand.</label>
                    <div className="check"><div className="inside"></div></div>
                  </li>
                </ul>
                    <div className="flex items-center justify-center pa5">
                      <a onClick={() => this.props.onRouteChange('CardOne') } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                          <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor"}} >
                            <title>chevronLeft icon</title>
                            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                          </svg>
                        <span className="pl1">Back</span>
                      </a>
                      <a onClick={() => this.props.onRouteChange('Submit') } href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
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

export default CardTwo;