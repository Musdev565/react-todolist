import './App.css'
import Tasksform from './components/TasksForm'

function App() {
  return (
    <div className="app-shell">
      <div className="app-card">
        <h1>Todo app</h1>
        <Tasksform />
      </div>
    </div>
  )
}

export default App