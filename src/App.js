import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
import Submit from './components/Submit/Submit';




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
      users: [],
      question1: '',
      question2: ''
}


const database = {
  question1: '',
  question2: ''
}


const values = Object.values(database);


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




  


  getChartData(){
    this.setState({
      chartData:{
          labels: ['Apostolic', 'Pastoral', 'Evangelic', 'Teacher', 'Prophetic'],
          datasets: [
              {
                label: 'Score',
                data: [
                    this.countInArray(values, "Apostolic"),
                    2,
                    6,
                    3,
                    7
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
  }
  

  
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  
  
  onQuestion1 = (question1) => {
    this.setState({question1: question1});
    database.question1 = question1;
    console.log(database);
  }  
  
  
  onQuestion2 = (question2) => {
    this.setState({question2: question2});
    database.question2 = question2;
  }
  
  
  componentWillMount(){
    this.getChartData();
    // fetch('/database')
    //   .then(res => res.json())
    //   .then(users => this.setState({users}, () => console.log('Customers fetched..', users)));
  }




  render() {
    return (
      <div className="App">
          <Particles className='particles' params={ particlesOptions } />
          <Logo />
          { this.state.route === 'CardOne' 
            ? <div>
              <CardOne onRouteChange={this.onRouteChange} onQuestion1={this.onQuestion1} />
            </div>
            : (
            this.state.route === 'CardTwo'
            ?  <div>
                <CardTwo onRouteChange={this.onRouteChange} onQuestion2={this.onQuestion2} />
              </div>
            : <div>
                <Submit onRouteChange={this.onRouteChange} chartData={this.state.chartData}/>
              </div>
              )
          }
      </div>
    );
  }
}

export default App;