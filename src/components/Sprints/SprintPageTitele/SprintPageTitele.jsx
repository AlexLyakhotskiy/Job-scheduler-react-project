import { useState } from 'react';
import { useSelector } from 'react-redux';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import IconBtn from '../../IconBtn/IconBtn';
import SpintBtAddSprint from '../SpintBtAddSprint/SpintBtAddSprint';
import s from './SprintPageTitele.module.scss';

const SprintPageTitele = () => {
  const project = useSelector(state => {
    const allProjects = allSelectors.newProject(state);
    return allProjects[3];
  });

  const inputSubmit = e => {
    e.preventDefault();
    inputlOpen();
    return;
  };

  const [isInputlOpen, setInputlOpen] = useState(false);
  const inputlOpen = () => setInputlOpen(state => !state);

  return (
    <div className={s.btnConteinerTitel}>
      <div className={s.conteinerTitelandBtn}>
        <div className={s.btnConteiner}>
          {!isInputlOpen && (
            <>
              <h1 className={s.title}>{project.title}</h1>
              <IconBtn icon={'pencil'} secondary onClick={inputlOpen} />
            </>
          )}

          {isInputlOpen && (
            <form className={s.editor} onSubmit={inputSubmit}>
              <input type="text" value={project.title} onClick={project._id} />
              <IconBtn icon={'pencil'} secondary type="submit" />
            </form>
          )}
        </div>

        <div className={s.btnDispleyNone}>
          <SpintBtAddSprint />
        </div>
      </div>
      {project.description && (
        <p className={s.btnDescription}>{project.description}</p>
      )}
    </div>
  );
};
export default SprintPageTitele;
