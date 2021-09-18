import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProjectsList } from '../../../redux/projects/projectSelectors';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import IconBtn from '../../IconBtn/IconBtn';
import SpintBtAddSprint from '../SpintBtAddSprint/SpintBtAddSprint';
import s from './SprintPageTitele.module.scss';

const SprintPageTitele = () => {
  const dispatch = useDispatch();
  const [isInputOpen, setInputlOpen] = useState(false);
  const inputlOpen = () => setInputlOpen(state => !state);
  const projects = useSelector(getProjectsList);
  const { projectId } = useParams();
  const nowProject = projects.find(project => project?._id === projectId);
  const [isProjectTitel, setProjectTitel] = useState(nowProject?.title);

  const onSubmit = isProjectTitel =>
    dispatch(sprintOperations.patchProject({ projectId, isProjectTitel }));

  const handelSubmit = e => {
    e.preventDefault();
    if (isProjectTitel === '') return alert('Введите название проекта');
    onSubmit(isProjectTitel);
    inputlOpen();
    return;
  };

  const handleIputChange = e => {
    setProjectTitel(e.currentTarget.value);
  };

  return (
    <div className={s.btnConteinerTitel}>
      <div className={s.conteinerTitelandBtn}>
        <div className={s.btnConteiner}>
          {!isInputOpen && (
            <>
              <h1 className={s.title}>{nowProject?.title}</h1>
              <IconBtn icon={'pencil'} secondary onClick={inputlOpen} />
            </>
          )}

          {isInputOpen && (
            <form className={s.editorForm} onSubmit={handelSubmit}>
              <input
                autoFocus
                type="text"
                maxlength="12"
                value={isProjectTitel}
                onChange={handleIputChange}
                className={s.editorInput}
              />
              <IconBtn
                icon={'pencil'}
                secondary
                type="submit"
                onClick={inputlOpen}
              />
            </form>
          )}
        </div>

        <div className={s.btnDispleyNone}>
          <SpintBtAddSprint />
        </div>
      </div>
      {nowProject?.description && (
        <p className={s.btnDescription}>{nowProject?.description}</p>
      )}
    </div>
  );
};
export default SprintPageTitele;
