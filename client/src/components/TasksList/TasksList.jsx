import styles from './_TasksList.module.scss';
import { useTasks } from '../../contexts/TasksContext';
import Task from './Task/Task';
import { Scrollbars } from 'react-custom-scrollbars-4';

export default function TasksList() {
  const { filteredTasks } = useTasks()
  
  return (
    <Scrollbars
      autoHide
      autoHeight
      autoHeightMax={100}
    >
      <div className={styles.tasksList}>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </Scrollbars>
  );
}