import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
import CardThree from './components/Cards/CardThree';
import CardFour from './components/Cards/CardFour';
import CardFive from './components/Cards/CardFive';
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
      question5: wholeSubmission.question5
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