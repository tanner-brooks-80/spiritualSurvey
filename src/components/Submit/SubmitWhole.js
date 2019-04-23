import React from 'react';
import './Submit.css';
import {Bar} from 'react-chartjs-2';

class SubmitWhole extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      chartData: props.chartData,
      users: [],
      data: props.getDataFromDb,
      chartDataWhole: props.chartDataWhole
    }
  }
  
  
    render() {
        return(
          <div id="div" className='chart-container br3 mw8 shadow-5 center' >
            <Bar 
                data={this.state.chartDataWhole}
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
                            },
                    legend: {
                        labels: {
                            fontColor: 'rgb(0, 0, 0)',
                            fontSize: 15,
                            fontStyle: 'bold'
                        }
                    }
                }}
            
            />
          </div>
        )
    }
    
}

export default SubmitWhole;