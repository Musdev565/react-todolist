import { useState } from 'react';
import { tasks as initialTasks } from '../tasks';
import Task from './Task';

export default function Tasksform() {
  const [saisie, setSaisie] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  const ajouterElement = (e) => {
    e.preventDefault();
    if (!saisie.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: saisie,
        isDone: false,
      },
    ]);

    setSaisie('');
  };

  return (
    <div className="todo-panel">
      <form className="todo-form" onSubmit={ajouterElement}>
        <div className="field-group">
          <input
            className="task-input"
            type="text"
            value={saisie}
            onChange={(e) => setSaisie(e.target.value)}
            placeholder="Ajouter une tâche..."
          />
        </div>
        <button className="add-button" type="submit">Ajouter</button>
      </form>
      <Task tasks={tasks} />
    </div>
  );
}