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
      autoHeightMin={100}
      autoHeightMax={600}
      renderView={props => (
        <div
          {...props}
          style={{
            ...props.style,
            marginBottom: 0,
          }}
        />
      )}
    >
      <div className={styles.tasksList}>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
        
        <div className={styles.spacer} />
      </div>
    </Scrollbars>
  );
}