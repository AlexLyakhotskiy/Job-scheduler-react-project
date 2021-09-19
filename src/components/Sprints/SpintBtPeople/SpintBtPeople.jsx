import Svg from '../../Svg/Svg';
import s from './SpintBtPeople.module.scss';

const SpintBtPeople = () => {
  //  открывать модалку с добавлением людей + запрос на сервер
  return (
    <div className={s.conteinerPeopleAdd}>
      <button className={s.btnPeopleAdd}>
        <Svg icon={'#icon-add-people'} className={s.iconPeopleAdd} />
        Додати людей
      </button>
    </div>
  );
};

export default SpintBtPeople;

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProjectMembers } from '../../../redux/projects/projectOperations';
// import { getProjectsList } from '../../../redux/projects/projectSelectors';
// import Modal from '../../Modal/Modal';
// import Svg from '../../Svg/Svg';
// import s from './SpintBtPeople.module.scss';

// const SpintBtPeople = ({ projectId }) => {
//   //  открывать модалку с добавлением людей + запрос на сервер
//   const dispatch = useDispatch();
//   const projects = useSelector(getProjectsList);
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState('');

//   const toggleModal = () => {
//     setShowModal(prevState => !prevState);
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;
//       default:
//         return;
//     }
//   };
//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(
//       addProjectMembers({
//         projectId,
//         contributorData: { email: email },
//       }),
//     );
//     setEmail('');
//     toggleModal();
//   };

//   return (
//     <>
//       <div className={s.conteinerPeopleAdd}>
//         <button className={s.btnPeopleAdd} onClick={toggleModal}>
//           <Svg icon={'#icon-add-people'} className={s.iconPeopleAdd} />
//           Додати людей
//         </button>
//       </div>
//       {showModal && (
//         <Modal closeModal={toggleModal}>
//           <h2>Додати людей</h2>
//           <form className="addForm" onSubmit={handleSubmit}>
//             <input
//               className="input"
//               type="text"
//               name="email"
//               autoComplete="off"
//               autoFocus
//               placeholder="Введіть e-mail"
//               value={email}
//               onChange={handleChange}
//             />
//             <h5>Додані користувачі</h5>
//             <ul>
//               {projects.length > 0 &&
//                 projects
//                   .find(project => project._id === projectId)
//                   .members.map(member => (
//                     <li className={s.item} key={member}>
//                       {member}
//                     </li>
//                   ))}
//             </ul>
//             <button className={s.btn} type="submit">
//               Save
//             </button>
//             <button className={s.btnCencel} type="button" onClick={toggleModal}>
//               Cancel
//             </button>
//           </form>
//         </Modal>
//       )}
//     </>
//   );
// };
