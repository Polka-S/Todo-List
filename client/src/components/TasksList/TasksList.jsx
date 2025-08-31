import styles from './_TasksList.module.scss';
import { useTasks } from '../../contexts/TasksContext';
import Task from './Task/Task';

export default function TasksList() {
  const { tasks } = useTasks()
  
  return (
    <div className={styles.tasksList}>
      {tasks.map(task => (
        <Task id={task.id} task={task.task} description={task.description} completed={task.completed} />
      ))}
    </div>
  );
}