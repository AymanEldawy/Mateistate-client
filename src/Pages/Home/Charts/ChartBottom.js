import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const style = {
  top: '100%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class ChartBottom extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={800} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={540}
          cy={90}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" wrapperStyle={style} />
        </Pie>
      </PieChart>
    );
  }
}
