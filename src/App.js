import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
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


// const values = Object.values(database);


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
  




 countInArray = (array, what) => {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}





  getDataFromDb = () => {
    fetch("https://backend-tannerbrooks123.c9users.io/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  
  
  
  
  
  
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





  componentWillMount(){
    // this.getChartData();
    fetch('https://backend-tannerbrooks123.c9users.io/database')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Customers fetched..', users)));
      // this.getChartData();
  }


  componentDidMount() {
        axios('https://backend-tannerbrooks123.c9users.io/database')
          .then(res => {
            const database = res.data
            console.log(database);
            const databaseItem1 = database[0]
            console.log(databaseItem1)
            let values = Object.values(databaseItem1)

          this.setState({
          chartData:{
              labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
              datasets: [
                  {
                    label: 'Score',
                    data: [
                        countInArray(values, "Apostolic"),
                        // 2,
                        // 6,
                        // 3,
                        // 7
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
  }




  


  // getChartData(){
  //   console.log("this is the current state being downloaded", this.state);
  //   const values = Object.values(this.state.users);
  //   console.log(values);
  //   this.setState({
  //     chartData:{
  //         labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
  //         datasets: [
  //             {
  //               label: 'Score',
  //               data: [
  //                   countInArray(values, "Apostolic"),
  //                   // 2,
  //                   // 6,
  //                   // 3,
  //                   // 7
  //               ],
  //               backgroundColor: [
  //                   'rgba(0, 0, 0, 0.6)',
  //                   'rgba(0, 0, 0, 0.6)',
  //                   'rgba(0, 0, 0, 0.6)',
  //                   'rgba(0, 0, 0, 0.6)',
  //                   'rgba(0, 0, 0, 0.6)',
  //               ]
  //             }
  //           ]
  //     }
  //   })
  // }
  

  
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  
  
  onQuestion1 = (question1) => {
    this.setState({question1: question1});
    database1.question1 = question1;
    console.log(database1);
    console.log(this.state);
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


  
  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }   
  
  
  
  
  
  

  
  
  
  
  
  
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
  
  
  
  
  
  
  
  
  
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("https://backend-tannerbrooks123.c9users.io/putData", {
      id: idToBeAdded,
      message: message
    });
  };
  
  
  
  
  
  
  
  
  
  
  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("https://backend-tannerbrooks123.c9users.io/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("https://backend-tannerbrooks123.c9users.io/putData", {
      id: idToBeAdded,
      message: message
    });
  };
  
  
  
  
  




  render() {
    return (
      <div className="App">
          <Particles className='particles' params={ particlesOptions } />
          <Logo />
          { this.state.route === 'CardOne' 
            ? <div>
              <CardOne onRouteChange={this.onRouteChange} onQuestion1={this.onQuestion1} getDataFromDb={this.getDataFromDb} />
            </div>
            : (
            this.state.route === 'CardTwo'
            ?  <div>
                <CardTwo onRouteChange={this.onRouteChange} onQuestion2={this.onQuestion2} />
              </div>
            : <div>
                <Submit onRouteChange={this.onRouteChange} chartData={this.state.chartData} getDataFromDb={this.getDataFromDb} />
              </div>
              )
          }
      </div>
    );
  }
}

export default App;