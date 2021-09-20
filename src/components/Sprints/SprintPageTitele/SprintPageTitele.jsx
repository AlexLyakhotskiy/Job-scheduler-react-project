import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchProject } from '../../../redux/projects/projectOperations';
import IconBtn from '../../IconBtn/IconBtn';
import SpintBtAddSprint from '../SpintBtAddSprint/SpintBtAddSprint';
import s from './SprintPageTitele.module.scss';

const SprintPageTitele = ({ nowProject, projectId }) => {
  const dispatch = useDispatch();

  const [isInputOpen, setInputOpen] = useState(false);
  const [isProjectTitel, setProjectTitel] = useState('title');
  const toggleInput = () => setInputOpen(state => !state);

  const handelSubmit = e => {
    e.preventDefault();
    if (isProjectTitel === '') return alert('Введите название проекта');

    dispatch(patchProject({ projectId, titleData: { title: isProjectTitel } }));
    toggleInput();
  };

  useEffect(() => {
    setProjectTitel(nowProject.title);
    setInputOpen(false);
  }, [projectId, nowProject.title]);

  const handleIputChange = e => {
    console.log(e.currentTarget.value);
    setProjectTitel(e.currentTarget.value);
  };

  return (
    <div className={s.btnConteinerTitel}>
      <div className={s.conteinerTitelandBtn}>
        <div className={s.btnConteiner}>
          {!isInputOpen && (
            <>
              <h1 className={s.title}>{nowProject.title}</h1>
              <IconBtn icon={'pencil'} secondary onClick={toggleInput} />
            </>
          )}

          {isInputOpen && (
            <form className={s.editorForm} onSubmit={handelSubmit}>
              <input
                autoFocus
                type="text"
                maxLength="12"
                value={isProjectTitel}
                onChange={handleIputChange}
                className={s.editorInput}
              />
              <IconBtn icon={'pencil'} secondary type="submit" />
            </form>
          )}
        </div>

        <div className={s.btnDispleyNone}>
          <SpintBtAddSprint />
        </div>
      </div>

      <p className={s.btnDescription}>{nowProject.description}</p>
    </div>
  );
};
export default SprintPageTitele;
