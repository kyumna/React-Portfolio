import React,{useState,useEffect} from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarGraph = () => {
    const [graphHeight, setGraphHeight] = useState(300);

    const updateGraphHeight = () => {
      const height = window.innerWidth < 415 ? 230 : 430; // Adjust the height based on screen width
      setGraphHeight(height);
    };
  
    useEffect(() => {
      updateGraphHeight();
      window.addEventListener('resize', updateGraphHeight);
      return () => {
        window.removeEventListener('resize', updateGraphHeight);
      };
    }, []);
    const data = {
        labels: ['React JS', 'JavaScript', 'SASS','Node JS','Redux','Express JS','Mongo DB'],
      
        datasets: [
            {
                label: 'My Skills',
                data: [20, 20, 25,15,20,15,20],
                
                
                backgroundColor: ["#556b2f"],
                borderColor: 'black',
                borderWidth: 1,

            }
        ]
    
    }
    
    const options = {
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero:true,
              ticks: {
               stepSize:10

              }
            }
          }
    }
    return (
        <div ><Bar
            data={data}
            width={1000}
            height={430}
            options={options}
          
        ></Bar></div>
    )
}

export default BarGraph