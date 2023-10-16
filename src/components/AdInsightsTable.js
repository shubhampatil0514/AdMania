import React, { useState } from 'react';
import { BiQuestionMark } from 'react-icons/bi';

function AdInsightsTable() {
  const columns = ['Campaigns', 'Click', 'Cost', 'Conversion', 'Revenue'];
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const toggleSortIcon = (column) => {
    if (sortOrder === 'asc') {
      return column === 'Revenue' ? '↑' : '';
    } else {
      return column === 'Revenue' ? '↓' : '';
    }
  };

  const sortByRevenue = (a, b) => {
    if (sortOrder === 'asc') {
      return a.Revenue - b.Revenue;
    } else {
      return b.Revenue - a.Revenue;
    }
  };

  const adInsightsData = [
    {
      Campaigns: 'Cosmetics',
      Click: 1200,
      Cost: 500,
      Conversion: 50,
      Revenue: 1500,
    },
    {
      Campaigns: 'Serums',
      Click: 800,
      Cost: 400,
      Conversion: 30,
      Revenue: 1200,
    },
    {
      Campaigns: 'Facewash',
      Click: 1500,
      Cost: 600,
      Conversion: 70,
      Revenue: 1800,
    },
    {
      Campaigns: 'Shampoos',
      Click: 950,
      Cost: 350,
      Conversion: 40,
      Revenue: 1300,
    },
    {
      Campaigns: 'Campaign 5',
      Click: 1800,
      Cost: 700,
      Conversion: 80,
      Revenue: 2000,
    },
    {
      Campaigns: 'Conditioner',
      Click: 700,
      Cost: 300,
      Conversion: 25,
      Revenue: 1000,
    },
    {
      Campaigns: 'Facewash 2',
      Click: 2100,
      Cost: 800,
      Conversion: 90,
      Revenue: 2200,
    },
  ];

  const sortedData = [...adInsightsData].sort(sortByRevenue);

  const calculateTotals = () => {
    const totals = {};
    columns.forEach((column) => {
      totals[column] = sortedData.reduce(
        (sum, row) => sum + row[column],
        0
      );
    });
    return totals;
  };

  const totals = calculateTotals();

  return (
    <div>
      <div className="flex items-center border-2">
        <h2 className="text-xl font-semibold ml-4">Ad Insights</h2>
        <BiQuestionMark size={16} className="border rounded-full ml-96" />
      </div>
      <table className="w-full border-collapse border-2">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 text-left">
                {column}{' '}
                <button
                  onClick={() => toggleSortOrder(column)}
                  className="ml-2"
                >
                  {toggleSortIcon(column)}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="border-b border-gray-300">
              {columns.map((column) => (
                <td key={column} className="py-2 px-4">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <td key={column} className="py-2 px-4">
                {column === 'Campaigns' ? 'Total' : totals[column]}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default AdInsightsTable;
