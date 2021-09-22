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

    dispatch(patchProject({ projectId, titleData: { title: isProjectTitel } }));
    toggleInput();
  };

  useEffect(() => {
    setProjectTitel(nowProject.title);
    setInputOpen(false);
  }, [projectId, nowProject.title]);

  const handleIputChange = e => {
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
                minLength="3"
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
