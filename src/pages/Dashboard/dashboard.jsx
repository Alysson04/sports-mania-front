import React from "react";
import "./dashboard.css";
import Card from "./components/Card";
import ChartSection from "./components/ChartSection";

function DashboardPage() { 
  return (
    <div className="dashboard">
    
      <div className="cards">
        <Card color="green" title="VENDAS DE HOJE" value="R$7.854,97" icon="💰" />
        <Card color="red" title="A PAGAR HOJE" value="R$3.457,99" icon="💼" />
        <Card color="blue" title="A RECEBER HOJE" value="R$2.663,55" icon="📥" />
        <Card color="cyan" title="FATURAMENTO DO MÊS" value="R$9.457,99" icon="📊" />
      </div>

 
      <ChartSection />
    </div>
  );
}

export default DashboardPage;
