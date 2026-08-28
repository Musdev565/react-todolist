import { tasks } from '../tasks.js';

export default function Task(){

    return(
          
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <h1>{task.title}</h1>
              <h2>{task.isDone ? "Fait" : "À faire"}</h2>
            </div>
          </li>
        ))}
      </ul>
    

    );

}