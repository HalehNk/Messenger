import React from 'react';
import Wrapper from '../Helpers/Wrapper';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const { setShowModal } = props;

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Wrapper>
      <div className={styles.modal_co}>
        <div className={styles.modal}>
          <button className={styles.close_modal} onClick={closeModal}>
            &times;
          </button>
          {/* ba props pass bede setsshowmodal ke inja false she ru onClick in */}
          <p className={styles.p_modal}>Something went WRONG!</p>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </Wrapper>
  );
};

export default ErrorModal;
