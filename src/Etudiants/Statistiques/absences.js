import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";


const Chart = () => {

  const chartContainer = useRef(null);
  const [modules, setModules]=useState(["Algèbre", "Analyse", "Technologie JEE", "Génie logiciel", "Systèmes distribués", "Administration réseaux et securité"])
  const [chartInstance, setChartInstance] = useState(null);
const chartConfig = {
  type: "bar",
  data: {
    labels: modules,
    datasets: [
      {

        data: [10, 5, 3, 5, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
      }
    ]
  },
  options: {
    legend: {
      display: false
  },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value + "%"
          },
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Percentage d'absence"
        }
        }
      ]
    }
  }
};

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };



  return (
    <div className="chart">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
