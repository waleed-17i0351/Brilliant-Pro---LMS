import './App.css';
import Tabs from './components/tabs/Tabs'
import Stats from './components/Admin/stats.tsx'
import Courses from './components/Admin/courses/courses'
import Course from './components/Admin/courses/course'
import Learner from './components/Admin/learner'
import Assessment from './components/Admin/assessments/assesstment';
import Material from './components/Admin/materials/material';
function App() {
  return (
    <div className="App">
      <div>
        <h1>BrilliantPro - World's Leading LMS</h1>
        <Tabs>
          <div label="Admin" className='Admin'>
            <h1 >Admin Dashboard</h1>
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
                <h2>Materials</h2>
                <Material />
              </div>
              <div label="Assessments">
                <h2>Assessment</h2>
                <Assessment />
              </div>
              <div label="Stats">
                <h2>Statistics</h2>
                <Stats />
              </div>
            </Tabs>
          </div>
          <div label="Learners">
            <h1>User Workspace</h1>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
