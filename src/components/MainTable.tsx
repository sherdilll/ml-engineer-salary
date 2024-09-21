import React, { useState } from "react";
import { Table } from "antd";
import { salaryData } from "../data";

interface SalaryData {
  year: number;
  totalJobs: number;
  avgSalary: number;
}

const MainTable: React.FC = () => {
  const [dataSource] = useState<SalaryData[]>(salaryData);

  const columns = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      sorter: (a: SalaryData, b: SalaryData) => a.year - b.year,
    },
    {
      title: "Total Jobs",
      dataIndex: "totalJobs",
      key: "totalJobs",
      sorter: (a: SalaryData, b: SalaryData) => a.totalJobs - b.totalJobs,
    },
    {
      title: "Average Salary (USD)",
      dataIndex: "avgSalary",
      key: "avgSalary",
      sorter: (a: SalaryData, b: SalaryData) => a.avgSalary - b.avgSalary,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="year"
      pagination={false}
    />
  );
};

export default MainTable;
