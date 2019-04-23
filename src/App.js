import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
import CardThree from './components/Cards/CardThree';
import CardFour from './components/Cards/CardFour';
import CardFive from './components/Cards/CardFive';
import CardSix from './components/Cards/CardSix';
import CardSeven from './components/Cards/CardSeven';
import CardEight from './components/Cards/CardEight';
import CardNine from './components/Cards/CardNine';
import CardTen from './components/Cards/CardTen';
import CardEleven from './components/Cards/CardEleven';
import CardTwelve from './components/Cards/CardTwelve';
import CardThirteen from './components/Cards/CardThirteen';
import CardFourteen from './components/Cards/CardFourteen';
import CardFifteen from './components/Cards/CardFifteen';
import CardSixteen from './components/Cards/CardSixteen';
import CardSeventeen from './components/Cards/CardSeventeen';
import CardEighteen from './components/Cards/CardEighteen';
import CardNineteen from './components/Cards/CardNineteen';
import CardTwenty from './components/Cards/CardTwenty';
import CardTwentyOne from './components/Cards/CardTwentyOne';
import CardTwentyTwo from './components/Cards/CardTwentyTwo';
import CardTwentyThree from './components/Cards/CardTwentyThree';
import CardTwentyFour from './components/Cards/CardTwentyFour';
import CardTwentyFive from './components/Cards/CardTwentyFive';
import CardTwentySix from './components/Cards/CardTwentySix';
import CardTwentySeven from './components/Cards/CardTwentySeven';
import CardTwentyEight from './components/Cards/CardTwentyEight';
import CardTwentyNine from './components/Cards/CardTwentyNine';
import CardThirty from './components/Cards/CardThirty';
import ReadyToSubmit from './components/Cards/ReadyToSubmit';
import Submit from './components/Submit/Submit';
import SubmitWhole from './components/Submit/SubmitWhole';
import axios from "axios";




const particlesOptions = {
    particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        }
    }
}

const initialState = {
      route: 'CardOne',
      chartData: {},
      chartDataWhole: {},
      users: {},
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      question11: '',
      question12: '',
      question13: '',
      question14: '',
      question15: '',
      question16: '',
      question17: '',
      question18: '',
      question19: '',
      question20: '',
      question21: '',
      question22: '',
      question23: '',
      question24: '',
      question25: '',
      question26: '',
      question27: '',
      question28: '',
      question29: '',
      question30: '',
      data: [],
      subData: {}
}


const database1 = {
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  question6: '',
  question7: '',
  question8: '',
  question9: '',
  question10: '',
  question11: '',
  question12: '',
  question13: '',
  question14: '',
  question15: '',
  question16: '',
  question17: '',
  question18: '',
  question19: '',
  question20: '',
}




const countInArray = (array, what) => {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === what) {
          count++;
      }
  }
  return count;
}



const countTotalItem = (database, what) => {
  var count=0;
  for (let i = 0; i < database.length; i++){
    let values = Object.values(database[i])
    count += countInArray(values, what);
    }
    return count;
}









class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  











  updateQuestion1 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });
    
    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question1: updateToApply }
    });
  };  
  
  updateQuestion2 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question2: updateToApply }
    });
  };  
  
  updateQuestion3 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question3: updateToApply }
    });
  };  
  
  updateQuestion4 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question4: updateToApply }
    });
  };  
  
  updateQuestion5 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question5: updateToApply }
    });
  };
  
  updateQuestion6 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question6: updateToApply }
    });
  };
  
  updateQuestion7 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question7: updateToApply }
    });
  };
  
  updateQuestion8 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question8: updateToApply }
    });
  };
  
  updateQuestion9 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question9: updateToApply }
    });
  };  
  
  updateQuestion10 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question10: updateToApply }
    });
  };  
  
  updateQuestion11 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question11: updateToApply }
    });
  };  
  
  updateQuestion12 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question12: updateToApply }
    });
  };
  
  updateQuestion13 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question13: updateToApply }
    });
  };  
  
  updateQuestion14 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question14: updateToApply }
    });
  };  
  
  updateQuestion15 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question15: updateToApply }
    });
  }; 
  
  updateQuestion16 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question16: updateToApply }
    });
  };
  
  updateQuestion17 = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
      id: objIdToUpdate,
      update: { question17: updateToApply }
    });
  };
  
  updateQuestion18 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question18: updateToApply }
      });
  };  
  
  updateQuestion19 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question19: updateToApply }
      });
  };  
  
  updateQuestion20 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question20: updateToApply }
      });
  };  
  
  updateQuestion21 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question21: updateToApply }
      });
  };  
  
  updateQuestion22 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question22: updateToApply }
      });
  };  
  
  updateQuestion23 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question23: updateToApply }
      });
  };
  
  updateQuestion24 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question24: updateToApply }
      });
  };  
  
  updateQuestion25 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question25: updateToApply }
      });
  };  
  
  updateQuestion26 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question26: updateToApply }
      });
  };  
  
  updateQuestion27 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question27: updateToApply }
      });
  };  
  
  updateQuestion28 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question28: updateToApply }
      });
  };  
  
  updateQuestion29 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question29: updateToApply }
      });
  };  
  
  updateQuestion30 = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("https://backend-tannerbrooks123.c9users.io/updateData", {
        id: objIdToUpdate,
        update: { question30: updateToApply }
      });
  };
















componentDidMount() {
      if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
    // this.getDataFromDb()
  } 



  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
  


  

  
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  
  
  onQuestion1 = (question) => {
    this.setState({question1: question});
    database1.question1 = question;
    console.log(this.state);
  }  
  
  
  onQuestion2 = (question) => {
    this.setState({question2: question});
    database1.question2 = question;
  }
  
  onQuestion3 = (question) => {
    this.setState({question3: question});
    database1.question3 = question;
  }  
  
  onQuestion4 = (question) => {
    this.setState({question4: question});
    database1.question4 = question;
  }  
  
  onQuestion5 = (question) => {
    this.setState({question5: question});
    database1.question5 = question;
  }

  
  
  
  
  
  
  
  


putDataToDB = (wholeSubmission) => {
  console.log("This is the wholeSubmission: ", wholeSubmission);
    axios.post('https://backend-tannerbrooks123.c9users.io/putData', {
      question1: wholeSubmission.question1,
      question2: wholeSubmission.question2,
      question3: wholeSubmission.question3,
      question4: wholeSubmission.question4,
      question5: wholeSubmission.question5,
      question6: wholeSubmission.question6,
      question7: wholeSubmission.question7,
      question8: wholeSubmission.question8,
      question9: wholeSubmission.question9,
      question10: wholeSubmission.question10,
      question11: wholeSubmission.question11,
      question12: wholeSubmission.question12,
      question13: wholeSubmission.question13,
      question14: wholeSubmission.question14,
      question15: wholeSubmission.question15,
      question16: wholeSubmission.question16,
      question17: wholeSubmission.question17,
      question18: wholeSubmission.question18,
      question19: wholeSubmission.question19,
      question20: wholeSubmission.question20,
      question21: wholeSubmission.question21,
      question22: wholeSubmission.question22,
      question23: wholeSubmission.question23,
      question24: wholeSubmission.question24,
      question25: wholeSubmission.question25,
      question26: wholeSubmission.question26,
      question27: wholeSubmission.question27,
      question28: wholeSubmission.question28,
      question29: wholeSubmission.question29,
      question30: wholeSubmission.question30,
    })
    .then(function (response) {
    console.log(response);
  })
    .catch(function (error) {
    console.log(error);
  });
};  

  
  
  
  
  getDataFromDb = () => {
    fetch('https://backend-tannerbrooks123.c9users.io/getData')
          .then(data => data.json())
          .then(res => {
            const database = res.data
            console.log("this is the database: ", database);
            const databaseItem1 = database[0];
            console.log("This is the first item in the database: ", databaseItem1);
            let values1 = Object.values(databaseItem1)

          this.setState({
          chartData:{
              labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
              datasets: [
                  {
                    label: 'Your Score',
                    data: [
                        countInArray(values1, "Apostolic"),
                        countInArray(values1, "Pastoral"),
                        countInArray(values1, "Evangelic"),
                        countInArray(values1, "Teacher"),
                        countInArray(values1, "Prophetic")
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0.6)',
                        'rgba(0, 0, 0, 0.6)',
                        'rgba(0, 0, 0, 0.6)',
                        'rgba(0, 0, 0, 0.6)',
                        'rgba(0, 0, 0, 0.6)',
                    ]
                  } 
                  // ,{
                  //   label: 'Total Congregation Submissions',
                  //   data: [
                  //         countTotalItem(database, "Apostolic"),
                  //         countTotalItem(database, "Pastoral"),
                  //         countTotalItem(database, "Evangelic"),
                  //         countTotalItem(database, "Teacher"),
                  //         countTotalItem(database, "Prophetic")
                  //     ],
                  //   type: 'line',
                  //   backgroundColor: 'rgba(255, 253, 196, 0.3)'
                  // }
                ]
          },
          
          chartDataWhole:{
              labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
              datasets: [
                {
                    label: 'Total Congregation Submissions',
                    data: [
                          countTotalItem(database, "Apostolic"),
                          countTotalItem(database, "Pastoral"),
                          countTotalItem(database, "Evangelic"),
                          countTotalItem(database, "Teacher"),
                          countTotalItem(database, "Prophetic")
                      ],
                    type: 'line',
                    backgroundColor: 'rgba(255, 253, 196, 0.3)'
                  }
                ]
          }
          
      , 
      data: database, 
      subData: databaseItem1
            
          }) 
    });
  };

  
  
  
  
  




  render() {
    return (
      <div className="App">
          <Particles className='particles' params={ particlesOptions } />
          <Logo />
          { this.state.route === 'CardOne' 
            ? <div>
              <CardOne onRouteChange={this.onRouteChange} 
                      onQuestion1={this.onQuestion1} 
                      putDataToDB={this.putDataToDB}
                      updateQuestion1={this.updateQuestion1}
                      updateDB={this.updateDB}
                      />
            </div>
            : 
            this.state.route === 'CardTwo'
            ?  <div>
                <CardTwo 
                      onRouteChange={this.onRouteChange} 
                      onQuestion2={this.onQuestion2} 
                      putDataToDB={this.putDataToDB}
                      updateQuestion2={this.updateQuestion2}
                      />
              </div>
            
            : 
            this.state.route === 'CardThree'
            ?  <div>
                <CardThree 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion3={this.updateQuestion3}
                      onQuestion3={this.onQuestion3}
                      />
              </div>
            :
            this.state.route === 'CardFour'
            ?  <div>
                <CardFour 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion4={this.updateQuestion4}
                      onQuestion4={this.onQuestion4}
                      />
              </div>
            :
            this.state.route === 'CardFive'
            ?  <div>
                <CardFive 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion5={this.updateQuestion5}
                      onQuestion5={this.onQuestion5}
                      />
              </div>
            :
            this.state.route === 'CardSix'
            ? <div>
                <CardSix 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion6={this.updateQuestion6}
                />
              </div>
            :
            this.state.route === 'CardSeven'
            ? <div>
                <CardSeven 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion7={this.updateQuestion7}
                />
              </div>
            :
            this.state.route === 'CardEight'
            ? <div>
                <CardEight 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion8={this.updateQuestion8}
                />
              </div>
            : 
            this.state.route === 'CardNine'
            ? <div>
                <CardNine 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion9={this.updateQuestion9}
                />
              </div>
            :
            this.state.route === 'CardTen'
            ? <div>
                <CardTen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion10={this.updateQuestion10}
                />
              </div>
            :
            this.state.route === 'CardEleven'
            ? <div>
                <CardEleven 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion11={this.updateQuestion11}
                />
              </div>
            :
            this.state.route === 'CardTwelve'
            ? <div>
                <CardTwelve 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion12={this.updateQuestion12}
                />
              </div>
            :
            this.state.route === 'CardThirteen'
            ? <div>
                <CardThirteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion13={this.updateQuestion13}
                />
              </div>
            :
            this.state.route === 'CardFourteen'
            ? <div>
                <CardFourteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion14={this.updateQuestion14}
                />
              </div>
            :
            this.state.route === 'CardFifteen'
            ? <div>
                <CardFifteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion15={this.updateQuestion15}
                />
              </div>
            :
            this.state.route === 'CardSixteen'
            ? <div>
                <CardSixteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion16={this.updateQuestion16}
                />
              </div>
            :
            this.state.route === 'CardSeventeen'
            ? <div>
                <CardSeventeen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion17={this.updateQuestion17}
                />
              </div>
            :
            this.state.route === 'CardEighteen'
            ? <div>
                <CardEighteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion18={this.updateQuestion18}
                />
              </div>
            :
            this.state.route === 'CardNineteen'
            ? <div>
                <CardNineteen 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion19={this.updateQuestion19}
                />
              </div>
            :
            this.state.route === 'CardTwenty'
            ? <div>
                <CardTwenty 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion20={this.updateQuestion20}
                />
              </div>
            :
            this.state.route === 'CardTwentyOne'
            ? <div>
                <CardTwentyOne 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion21={this.updateQuestion21}
                />
              </div>
            :
            this.state.route === 'CardTwentyTwo'
            ? <div>
                <CardTwentyTwo 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion22={this.updateQuestion22}
                />
              </div>
            :
            this.state.route === 'CardTwentyThree'
            ? <div>
                <CardTwentyThree 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion23={this.updateQuestion23}
                />
              </div>
            :
            this.state.route === 'CardTwentyFour'
            ? <div>
                <CardTwentyFour 
                      onRouteChange={this.onRouteChange} 
                      updateQuestion24={this.updateQuestion24}
                />
              </div>
            :
            this.state.route === 'CardTwentyFive'
            ? <div>
                <CardTwentyFive
                      onRouteChange={this.onRouteChange} 
                      updateQuestion25={this.updateQuestion25}
                />
              </div>
            :
            this.state.route === 'CardTwentySix'
            ? <div>
                <CardTwentySix
                      onRouteChange={this.onRouteChange} 
                      updateQuestion26={this.updateQuestion26}
                />
              </div>
            :
            this.state.route === 'CardTwentySeven'
            ? <div>
                <CardTwentySeven
                      onRouteChange={this.onRouteChange} 
                      updateQuestion27={this.updateQuestion27}
                />
              </div>
            :
            this.state.route === 'CardTwentyEight'
            ? <div>
                <CardTwentyEight
                      onRouteChange={this.onRouteChange} 
                      updateQuestion28={this.updateQuestion28}
                />
              </div>
            :
            this.state.route === 'CardTwentyNine'
            ? <div>
                <CardTwentyNine
                      onRouteChange={this.onRouteChange} 
                      updateQuestion29={this.updateQuestion29}
                />
              </div>
            :
            this.state.route === 'CardThirty'
            ? <div>
                <CardThirty
                      onRouteChange={this.onRouteChange} 
                      updateQuestion30={this.updateQuestion30}
                />
              </div>
            :
            this.state.route === 'ReadyToSubmit'
            ? <div>
                <ReadyToSubmit 
                      onRouteChange={this.onRouteChange}
                      wholeSubmission={this.putDataToDB}
                      subData={this.state.subData}
                />
              </div>
            : 
              <div>
                <Submit onRouteChange={this.onRouteChange} chartData={this.state.chartData} getDataFromDb={this.getDataFromDb} />
                <SubmitWhole onRouteChange={this.onRouteChange} chartDataWhole={this.state.chartDataWhole} getDataFromDb={this.getDataFromDb} />
              </div>
              
          }
      </div>
    );
  }
}

export default App;