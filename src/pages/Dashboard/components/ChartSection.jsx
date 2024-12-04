import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ChartSection.css";

function ChartSection() {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {

    let lineChart;
    let pieChart;

    if (lineChartRef.current) {
    
      if (lineChartRef.current.chart) {
        lineChartRef.current.chart.destroy();
      }
   
      lineChartRef.current.chart = new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Receita",
              data: [200, 150, 180, 220, 250, 200, 300, 250, 280, 270, 260, 300],
              borderColor: "red",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Despesa",
              data: [100, 200, 150, 300, 200, 100, 200, 300, 150, 200, 100, 250],
              borderColor: "yellow",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      });
    }

    if (pieChartRef.current) {
   
      if (pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }
 
      pieChartRef.current.chart = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: [
            "Funcionário",
            "Energia",
            "Aluguel",
            "Impostos",
            "Desp. Bancária",
            "Publicidade",
            "Fornecedores",
          ],
          datasets: [
            {
              data: [30, 10, 15, 20, 5, 10, 10],
              backgroundColor: [
                "#2196f3",
                "#4caf50",
                "#9c27b0",
                "#ffc107",
                "#f44336",
                "#00bcd4",
                "#ffeb3b",
              ],
            },
          ],
        },
      });
    }

   
    return () => {
      if (lineChartRef.current?.chart) {
        lineChartRef.current.chart.destroy();
      }
      if (pieChartRef.current?.chart) {
        pieChartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="charts">
      <div className="chart">
        <h3>Receita x Despesa <br /><small>(2023-2024)</small></h3>
        <canvas ref={lineChartRef}></canvas>
      </div>
      <div className="chart">
        <h3>Despesas por categoria <br /><small>(2023-2024)</small></h3>
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
}

export default ChartSection;
