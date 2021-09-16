const CreateTaskForm = () => {
  return (
    <div>
      <form>
        <label>
          Назва задачі
          <input type="text" name="name" value="" required onChange="" />
        </label>
        <label>
          Заплановано годин
          <input type="number" name="number" value="" required onChange="" />
        </label>
        <button type="submit">Готово</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
