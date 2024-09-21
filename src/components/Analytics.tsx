import React, { useState } from "react";
import { Line } from "@ant-design/charts";
import { Table } from "antd";
import { salaryData } from "../data";

interface JobData {
  title: string;
  count: number;
}

const Analytics: React.FC = () => {
  const [selectedYearJobs, setSelectedYearJobs] = useState<JobData[] | null>(
    null
  );

  const lineData = salaryData.map((item) => ({
    year: item.year,
    totalJobs: item.totalJobs,
  }));

  const lineConfig = {
    data: lineData,
    xField: "year",
    yField: "totalJobs",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  const handleRowClick = (record: any) => {
    const selectedYearData = salaryData.find(
      (item) => item.year === record.year
    );
    if (selectedYearData) {
      setSelectedYearJobs(selectedYearData.jobs);
    }
  };

  const jobColumns = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Number of Jobs",
      dataIndex: "count",
      key: "count",
    },
  ];

  return (
    <div>
      <Line {...lineConfig} />
      <Table
        columns={[
          {
            title: "Year",
            dataIndex: "year",
            key: "year",
          },
          {
            title: "Total Jobs",
            dataIndex: "totalJobs",
            key: "totalJobs",
          },
          {
            title: "Average Salary (USD)",
            dataIndex: "avgSalary",
            key: "avgSalary",
          },
        ]}
        dataSource={salaryData}
        rowKey="year"
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      {selectedYearJobs && (
        <Table
          columns={jobColumns}
          dataSource={selectedYearJobs}
          rowKey="title"
          pagination={false}
          title={() => "Job Titles for Selected Year"}
        />
      )}
    </div>
  );
};

export default Analytics;
