import React,{useState,useEffect} from 'react'
import barStyles from './BarGraph.css';
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
        labels: ['Mon', 'Tue', 'Wed','dd','DD','ss','ww'],
        datasets: [
            {
                label: 'My Skills',
                data: [3, 6, 111],
                backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
                borderColor: 'black',
                borderWidth: 1,

            }
        ]
    }
    const options = {}
    return (
        <div className={barStyles.barHeight}><Bar
            data={data}
            width={1000}
            height={430}
            options={{ maintainAspectRatio: false }}
            // style={barStyles.barHeight}
        ></Bar></div>
    )
}

export default BarGraph