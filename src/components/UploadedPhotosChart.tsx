import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryTheme } from 'victory';
import { type ChartData } from '../types';

interface UploadedPhotosChartProps {
    data: ChartData[];
}

const UploadedPhotosChart: React.FC<UploadedPhotosChartProps> = ({ data }) => {
    const photosData = data.map(d => ({ x: d.day, y: d.photos }));
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
                        { name: "Uploaded Photos", symbol: { fill: "#5459D2" } }
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
                    data={photosData}
                    style={{ data: { fill: "#5459D2" } }}
                    barWidth={20}
                    cornerRadius={{ topLeft: 3, topRight: 3 }}
                />
            </VictoryChart>
        </div>
    );
};

export default UploadedPhotosChart;