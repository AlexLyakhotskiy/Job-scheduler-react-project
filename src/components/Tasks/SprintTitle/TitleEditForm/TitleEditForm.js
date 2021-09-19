const TitleEditForm = ({ onChangeTitle, title, toggleInput }) => {
  const onSubmit = e => {
    e.preventDefault();
    toggleInput();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitle}
        required
      ></input>
      <button type="submit">Edit</button>
    </form>
  );
};

export default TitleEditForm;
