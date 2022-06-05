import './App.css';
import Tabs from './components/tabs/Tabs'
import Stats from './components/Admin/stats'
function App() {
  return (
    <div className="App">
    <div>
      <h1>Admin Panel</h1>
      <Tabs>
        <div label="Courses">
          <p>Course</p>
        </div>
        <div label="Learners">
          <p>Learner</p>
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
