
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLegend, VictoryTheme } from 'victory';
import { type ChartData } from '../types';

interface AnalyticsChartProps {
  data: ChartData[];
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  const visitsData = data.map(d => ({ x: d.day, y: d.visits }));
  const salesData = data.map(d => ({ x: d.day, y: d.sales }));
  const dayLabels = data.map(d => d.day);

  return (
    <div className="w-full h-full">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 30 }}
        width={380}
        height={350}
      >
        <VictoryLegend
          x={100} y={10}
          orientation="horizontal"
          gutter={20}
          style={{ 
            border: { stroke: "none" },
            title: { fontSize: 14, fill: '#333' } 
          }}
          data={[
            { name: "Visits", symbol: { fill: "#2027D2" } },
            { name: "Sales", symbol: { fill: "#F79009" } }
          ]}
        />
        <VictoryAxis
          tickValues={dayLabels}
          style={{
            axis: { stroke: "#d1d5db" },
            tickLabels: { fontSize: 10, padding: 15, fill: "#6b7280", angle: -45, textAnchor: 'end' },
            grid: { stroke: "transparent" }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "transparent" },
            tickLabels: { fontSize: 10, padding: 5, fill: "#6b7280" },
            grid: { stroke: "#e5e7eb", strokeDasharray: "4, 8" }
          }}
        />
        <VictoryGroup offset={12} colorScale={"qualitative"}>
          <VictoryBar
            data={visitsData}
            style={{ data: { fill: "#2027D2" } }}
            barWidth={10}
            cornerRadius={{ topLeft: 3, topRight: 3 }}
          />
          <VictoryBar
            data={salesData}
            style={{ data: { fill: "#F79009" } }}
            barWidth={10}
            cornerRadius={{ topLeft: 3, topRight: 3 }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default AnalyticsChart;
