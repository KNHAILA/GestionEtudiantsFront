import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";


const Chart = () => {

  const chartContainer = useRef(null);
  const [modules, setModules]=useState([])
  const [prc, setprc]=useState([])
  const [chartInstance, setChartInstance] = useState(null);
const chartConfig = {
  type: "bar",
  data: {
    labels: modules,
    datasets: [
      {

        data: prc,
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
    fetch(`http://localhost:8080/Etude/listNomMatieres/F1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
      setModules(data)
    })
    fetch(`http://localhost:8080/Etude/listPourcentages/F1`)
    .then(res => res.json())
    .then(data => {
        chartConfig.data=data
        console.log(data)
      setprc(data)
    })
  }, []);
  useEffect(() => {
    if (prc!=undefined && modules!=undefined &&chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    } 
    console.log("jhbbjh")
  }, [prc]);

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
