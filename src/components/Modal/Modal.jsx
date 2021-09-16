import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <div onClick={handleBackdropClick} className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
