import IconBtn from '../../IconBtn/IconBtn';
import styles from '../TasksList.module.scss';

const SprintTitle = ({ toggleInput, title }) => {
  return (
    <>
      <h2 className={styles.sprintTitle}>{title}</h2>
      <IconBtn
        onClick={toggleInput}
        icon="pencil"
        secondary
        className={styles.iconPencil}
      />
    </>
  );
};

export default SprintTitle;
