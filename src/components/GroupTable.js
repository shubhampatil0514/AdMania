import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Switch from '@mui/material/Switch';
import { FaChartPie, FaTable } from 'react-icons/fa';
import { BiChevronDown,BiQuestionMark } from 'react-icons/bi';

function GroupTable() {
  const [showChart, setShowChart] = useState(true);

  const genderData = [
    {
      group: 'Male',
      click: 40,
      cost: 100,
      conversion: 15,
      revenue: 200,
    },
    {
      group: 'Female',
      click: 35,
      cost: 90,
      conversion: 12,
      revenue: 180,
    },
    {
      group: 'Unknown',
      click: 25,
      cost: 70,
      conversion: 10,
      revenue: 150,
    }];

  const toggleView = () => {
    setShowChart(!showChart);
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: genderData.map((row) => row.group),
    backgroundColor: ['darkorange', 'blue', 'black'],  
  };

  const chartSeries = genderData.map((row) => row.click);

  return (
    <div >
      <div className="flex items-center border-2">
        <h2 className="text-xl font-semibold ">Ad Insights</h2>
        <div  className="text-sm border rounded ml-40 flex">
          <p className="pl-2 pr-4">clicks</p>
          <BiChevronDown size={16} className="ml-1" />
        </div>
        <BiQuestionMark size={16} className="border rounded-full ml-6" />
      </div>
      {showChart ? (
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="400" 
          height="400" 
          
        />
      ) : (
        <table className="w-full border-collapse border-2 border-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Group</th>
              <th className="py-2 px-4 text-left">Click</th>
              <th className="py-2 px-4 text-left">Cost</th>
              <th className="py-2 px-4 text-left">Conversion</th>
              <th className="py-2 px-4 text-left">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {genderData.map((row, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{row.group}</td>
                <td className="py-2 px-4">{row.click}</td>
                <td className="py-2 px-4">{row.cost}</td>
                <td className="py-2 px-4">{row.conversion}</td>
                <td className="py-2 px-4">{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className='flex items-center ml-auto w-24 bg-slate-200 border mt-4 mr-2 rounded-md'>
        <label><FaTable size={18} /></label>
        <Switch checked={showChart} onChange={toggleView} />
        <label><FaChartPie size={18} /></label>
      </div>

    </div>
  );
}

export default GroupTable;
