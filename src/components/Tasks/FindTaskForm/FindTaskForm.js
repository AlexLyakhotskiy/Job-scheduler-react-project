const FindTaskForm = () => {
  return (
    <li>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Find task by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={() => {}}
          />
        </label>
        <button type="submit">Edit</button>
      </form>
    </li>
  );
};

export default FindTaskForm;
