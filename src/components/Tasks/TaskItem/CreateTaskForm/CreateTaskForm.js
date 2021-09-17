import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../../redux/tasks/tasks-operations';

const initialState = {
  title: '',
  hoursPlanned: '',
};

const CreateTaskForm = () => {
  const [task, setTask] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(`task`, task);
    dispatch(addTask({ title: task.title, hoursPlanned: task.hoursPlanned }));
    setTask({
      title: '',
      hoursPlanned: '',
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Назва задачі
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={onHandleChange}
            required
          />
        </label>
        <label>
          Заплановано годин
          <input
            type="number"
            name="hoursPlanned"
            value={task.hoursPlanned}
            onChange={onHandleChange}
            required
          />
        </label>
        <button type="submit">Готово</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
