import './App.css';
import Tabs from './components/tabs/Tabs'
import Stats from './components/Admin/stats.tsx'
import Course from './components/Admin/course'
import Learner from './components/Admin/learner'
function App() {
  return (
    <div className="App">
    <div>
      <h1>Admin Panel</h1>
      <Tabs>
        <div label="Courses">
          <h2>Courses</h2>
          <Course />
        </div>
        <div label="Learners">
          <h2>Learners</h2>
          <Learner />
        </div>
        <div label="Materials">
          <p>Material</p>
        </div>
        <div label="Assessments">
          <p>Assessment</p> 
        </div>
        <div label="Stats">
          <h2>Statistics</h2> 
          <Stats />
        </div>
      </Tabs>
    </div>
  </div>
  );
}

export default App;
