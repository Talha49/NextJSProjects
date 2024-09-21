import PieChart from '@/components/ChartComponents/PieCharts';
import React from 'react'

interface FDComponents {
    investment: string;
    rateOfinterest: string;
    timePeriod: string;
}
const FDChart = ({investment, rateOfinterest,timePeriod } : FDComponents) => {
    const principle = parseFloat(investment);
    const interestRate = parseFloat(rateOfinterest);
    const years = parseInt(timePeriod);

    const interest = (principle * interestRate * years)/100;
    const totalValue = principle + interest;
 
    const chartData = {
        labels: ['Total Investment', 'Interest'],
        datasets: [
            {
                data: [principle, interest],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
  return (
    <div><PieChart data={chartData}/></div>
  )
}

export default FDChart