import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
export default function Stats() {
  /*type LabelRenderProps = {
    x: number;
    y: number;
    dx: number;
    dy: number;
    textAnchor: string;
    dataEntry: {
      ...props.data[dataIndex];
      // props.data entry relative to the label extended with:
      startAngle: number;
      degrees: number;
      percentage: number;
    };
    dataIndex: number;
    style: React.CSSProperties;
  };*/
    return (
        <PieChart
            data={[
                { title: 'Learners Enrolled', value: 30, color: '#F38627' },
                { title: 'Leaners progressed 50%', value: 20, color: '#D13C37' },
                { title: 'Learners passed', value: 20, color: '#E1C535' },
                { title: 'Learners failed', value: 5, color: '#E1A110' },
            ]}
            /*label={(labelRenderProps: LabelRenderProps) =>
                number | string | React.ReactElement | undefined | null
              }*/
            radius={10}
            viewBoxSize={[100,100]}
            
        />
    )
}