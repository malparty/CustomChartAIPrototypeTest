import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryTheme } from 'victory';
import { type ChartData } from '../types';

interface CompletedSurveysChartProps {
    data: ChartData[];
}

const CompletedSurveysChart: React.FC<CompletedSurveysChartProps> = ({ data }) => {
    const surveysData = data.map(d => ({ x: d.day, y: d.surveys }));
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
                        { name: "Completed Surveys", symbol: { fill: "#FDB022" } }
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
                <VictoryBar
                    data={surveysData}
                    style={{ data: { fill: "#FDB022" } }}
                    barWidth={20}
                    cornerRadius={{ topLeft: 3, topRight: 3 }}
                />
            </VictoryChart>
        </div>
    );
};

export default CompletedSurveysChart;