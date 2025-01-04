import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Link } from 'react-scroll';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Home = () => {
  const [dailyTransactions, setDailyTransactions] = useState([]);
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  const [loadingDaily, setLoadingDaily] = useState(true);
  const [loadingMonthly, setLoadingMonthly] = useState(true);

  // Fetch Daily Transactions
  const fetchDailyTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/DailyTransaction");
      setDailyTransactions(response.data);
      setLoadingDaily(false);
    } catch (error) {
      console.error("Error fetching daily transactions:", error);
      setLoadingDaily(false);
    }
  };

  // Fetch Monthly Transactions
  const fetchMonthlyTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/MonthlyTransaction");
      setMonthlyTransactions(response.data);
      setLoadingMonthly(false);
    } catch (error) {
      console.error("Error fetching monthly transactions:", error);
      setLoadingMonthly(false);
    }
  };

  // Prioritize Fetching Daily Transactions First
  useEffect(() => {
    fetchDailyTransactions();
    fetchMonthlyTransactions();
  }, []);

  // Prepare Data for Charts
  const prepareChartData = (transactions) => {
    const categories = transactions.map((t) => t.category);
    const amounts = transactions.map((t) => t.amount);

    return {
      labels: categories,
      datasets: [
        {
          label: 'Transaction Amounts',
          data: amounts,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
          ],
          borderColor: '#fff',
          borderWidth: 1,
        },
      ],
    };
  };

  // Chart Options for Reduced Size
  const chartOptions = {
    maintainAspectRatio: false, // Disable aspect ratio to set custom dimensions
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10, // Adjust legend box size
        },
      },
    },
  };

  const chartStyle = {
    height: '300px', // Adjust chart height
    width: '300px',  // Adjust chart width
    margin: 'auto',
  };

  return (
    <div>
      <h1>Transaction Charts</h1>

      {/* Daily Transactions */}
      <div>
        <h2>Daily Transactions</h2>
        {loadingDaily ? (
          <p>Loading daily transactions...</p>
        ) : (
          <div style={chartStyle}>
            <Pie data={prepareChartData(dailyTransactions)} options={chartOptions} style={{margin:"-30px 0px 0px -500px"}}/>
            <Bar data={prepareChartData(dailyTransactions)} options={chartOptions} style={{margin:"-350px 0px 0px 300px"}}/>
          </div>
        )}
      </div>

      {/* Monthly Transactions */}
      <div>
        <h2>Monthly Transactions</h2>
        {loadingMonthly ? (
          <p>Loading monthly transactions...</p>
        ) : (
          <div style={chartStyle}>
            <Pie data={prepareChartData(monthlyTransactions)} options={chartOptions} style={{margin:"-30px 0px 0px -500px"}}/>
            <Bar data={prepareChartData(monthlyTransactions)} options={chartOptions} style={{margin:"-350px 0px 0px 300px"}}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
