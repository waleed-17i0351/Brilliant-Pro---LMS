import { PieChart } from 'react-minimal-pie-chart';
export default function Stats() {

    return (
        <PieChart
            data={[
                { title: 'Learners Enrolled', value: 30, color: '#F38627' },
                { title: 'Leaners progressed 50%', value: 20, color: '#D13C37' },
                { title: 'Learners passed', value: 20, color: '#E1C535' },
                { title: 'Learners failed', value: 5, color: '#E1A110' },
            ]}
            radius='10'
            viewBoxSize={[100,100]}
            height='30%'
        />
    )
}