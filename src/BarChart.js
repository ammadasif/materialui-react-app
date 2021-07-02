import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "Febuary", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Biryani",
      data: [73, 92, 39, 50, 28, 34],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Nihari",
      data: [52, 33, 98, 23, 43, 67],
      backgroundColor: "rgba(255, 132, 13, 0.2)",
      borderColor: "rgba(255, 132, 13, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function BarChart() {
  return (
    <div className="header">
      <h1 className="title"> Sales per Month</h1>
      <Bar data={data} width={100} height={25} options={options} />
    </div>
  );
}
export default BarChart;
