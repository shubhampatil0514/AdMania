import React, { useState } from 'react';
import AdInsightsTable from './AdInsightsTable';
import GroupTable from './GroupTable';

const Dashboard = () => {

  return (
    <div className='bg-slate-50 min-h-screen p-10 '>
      <div className='flex mx-40 px-12'>
        <div className=' mr-8 rounded-md border border-black'>
          <AdInsightsTable />
        </div>
        <div className=' ml-8 border rounded-md border-black'>
          <GroupTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


