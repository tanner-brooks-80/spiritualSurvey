import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
import ReadyToSubmit from './components/Cards/ReadyToSubmit';
import Submit from './components/Submit/Submit';
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
      users: {},
      question1: '',
      question2: '',
      data: []
}


const database1 = {
  question1: '',
  question2: ''
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


class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }
  





  
  
  
  
  
  putDataToDB = question1Answer => {
    console.log(question1Answer);
    axios.post('https://backend-tannerbrooks123.c9users.io/putData', {
      question1: question1Answer
    })
    .then(function (response) {
    console.log(response);
  })
    .catch(function (error) {
    console.log(error);
  });
};  











  // our update method that uses our backend api
  // to overwrite existing data base information
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







  // componentWillMount(){
  //   // this.getChartData();
  //   fetch('https://backend-tannerbrooks123.c9users.io/database')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}, () => console.log('Customers fetched..', users)));
  //     // this.getChartData();
  // }


 componentDidMount() {
      if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
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
  
  
  onQuestion1 = (question1) => {
    this.setState({question1: question1});
    database1.question1 = question1;
    // console.log(database1);
    console.log(this.state);
    // fetch("https://backend-tannerbrooks123.c9users.io/database")
    
  }  
  
  
  onQuestion2 = (question2) => {
    this.setState({question2: question2});
    database1.question2 = question2;
  }
  
  
  // componentWillMount(){
  //   this.getChartData();
  //   fetch('https://backend-tannerbrooks123.c9users.io/database')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}, () => console.log('Customers fetched..', users)));
  // }
  
  
  
  
  
  
  
  
  
  
  // putDataToDB = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post("https://backend-tannerbrooks123.c9users.io/database", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };
  
  
  
  
  
  
  
  
  
  
  // our first get method that uses our backend api to 
  // fetch data from our data base
  // getDataFromDb = () => {
  //   fetch("https://backend-tannerbrooks123.c9users.io/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };  
  
  
  getDataFromDb = () => {
    axios('https://backend-tannerbrooks123.c9users.io/getData')
          .then(res => {
            const database = res.data
            console.log(database);
            const databaseItem1 = database.data[0]
            // const databaseItem2 = database[0]
            let values1 = Object.values(databaseItem1)
            // let values2 = Object.values(databaseItem2)

          this.setState({
          chartData:{
              labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
              datasets: [
                  {
                    label: 'Score',
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
                ]
          }
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
            this.state.route === 'ReadyToSubmit'
            ? <div>
                <ReadyToSubmit 
                      onRouteChange={this.onRouteChange}
                />
              </div>
            : 
              <div>
                <Submit onRouteChange={this.onRouteChange} chartData={this.state.chartData} getDataFromDb={this.getDataFromDb} />
              </div>
              
          }
      </div>
    );
  }
}

export default App;