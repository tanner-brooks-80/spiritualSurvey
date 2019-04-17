import React from 'react';
import './Submit.css';
import {Bar} from 'react-chartjs-2';

class Submit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      chartData: props.chartData,
      users: [],
      data: props.getDataFromDb
    }
  }
  
  
  
//   componentWillMount(){
//     this.getChartData();
//     // fetch('/database')
//     //   .then(res => res.json())
//     //   .then(users => this.setState({users}, () => console.log('Customers fetched..', users)));
//   }
  

   
    render() {
        return(
          <div id="div" className='chart-container br3 mw8 shadow-5 center' >
            <Bar 
                data={this.state.chartData}
                width={100}
                height={40}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                                    }
                                }],
                        xAxes: [{
                            ticks: {
                              fontColor: 'black'
                            }

                        }]
                            }
                }}
            
            />
          </div>
        )
    }
    
}

export default Submit;