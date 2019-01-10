import React, { Component } from "react";
import Chart from "chart.js";
import "./BarChart.css";
export default class componentName extends Component {
  componentDidMount() {
    var barChartData = {
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Fulfilled",
          backgroundColor: "pink",
          borderColor: "red",
          borderWidth: 1,
          data: [3, 5, 6, 7, 3, 5, 6, 7]
        },
        {
          label: "Booked",
          backgroundColor: "lightblue",
          borderColor: "blue",
          borderWidth: 1,
          data: [4, 7, 3, 6, 10, 7, 4, 6]
        },
        {
          label: "Arrived",
          backgroundColor: "lightgreen",
          borderColor: "green",
          borderWidth: 1,
          data: [10, 7, 4, 6, 9, 7, 3, 10]
        },
        {
          label: "No Show",
          backgroundColor: "yellow",
          borderColor: "orange",
          borderWidth: 1,
          data: [6, 9, 7, 3, 10, 7, 4, 6]
        }
      ]
    };

    var chartOptions = {
      responsive: true,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    window.onload = function() {
      var ctx = document.getElementById("canvas").getContext("2d");
      window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
      });
    };
  }

  render() {
    return (
      <div id="graph-container">
        <canvas id="canvas" height="25%" width="100%" />
      </div>
    );
  }
}
