import React from "react";
import MainTable from "./components/MainTable";
import Analytics from "./components/Analytics";
import "antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>ML Engineer Salary Dashboard</h1>
      <h2>Main Table</h2>
      <MainTable />
      <h2>Analytics</h2>
      <Analytics />
    </div>
  );
};

export default App;
