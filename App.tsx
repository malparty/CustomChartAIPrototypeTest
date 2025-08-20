
import React, { useState, useEffect } from 'react';
import AnalyticsChart from './components/AnalyticsChart';
import { type ChartData } from './types';

const App: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const generateData = () => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const today = new Date().getDay();
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const dayIndex = (today - 6 + i + 7) % 7;
        return days[dayIndex];
      });

      const data: ChartData[] = last7Days.map(day => ({
        day,
        visits: Math.floor(Math.random() * 11),
        sales: Math.floor(Math.random() * 11),
      }));
      setChartData(data);
    };

    generateData();
  }, []);

  const ClockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const WifiIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.566A5.5 5.5 0 0112 15c1.475 0 2.844.526 3.889 1.566M4.5 12.5c2.5-2.5 6.5-2.5 9 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5c.5-1 1.5-1 2 0 .5 1 1.5 1 2 0 .5-1 1.5-1 2 0M3 10.5a15 15 0 0118 0" />
    </svg>
  );
  
  const BatteryIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" />
    </svg>
  );

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 font-sans">
      {/* iPhone 15 Pro Frame */}
      <div className="w-[393px] h-[852px] bg-gray-900 rounded-[55px] shadow-2xl p-[10px] ring-4 ring-gray-700">
        <div className="w-full h-full bg-white rounded-[45px] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20"></div>

          {/* Screen Content */}
          <main className="w-full h-full flex flex-col">
            {/* Status Bar */}
            <header className="px-8 pt-5 flex justify-between items-center text-sm font-semibold z-10">
              <div className="flex items-center space-x-1">
                <ClockIcon />
                <span>9:41</span>
              </div>
              <div className="flex items-center space-x-2">
                <WifiIcon />
                <BatteryIcon />
              </div>
            </header>

            {/* Main App View */}
            <div className="flex-grow p-6 pt-8 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-500 mb-6">Last 7 Days Analytics</p>

              <div className="flex-grow w-full h-1/2 flex items-center justify-center">
                {chartData.length > 0 ? (
                  <AnalyticsChart data={chartData} />
                ) : (
                  <p className="text-gray-400">Loading chart data...</p>
                )}
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-gray-400 rounded-full"></div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
