import React from 'react';

import OpenArrow from '../../assets/img/OpenArrow.png';
import CloseArrow from '../../assets/img/CloseArrow.png';
import Wrapper from '../Helpers/Wrapper';
import styles from './RSArrowButton.module.css';

const RSArrowButton = (props) => {
  const toggleHandler = () => {
    props.setOpen(!props.open);
  };

  return (
    <Wrapper>
      <img
        className={styles.img_arrow_open}
        onClick={toggleHandler}
        src={`${props.open ? CloseArrow : OpenArrow}`}
        // src={OpenArrow}
        alt=""
      />
      {/* <img className={styles.img_arrow_open} src={OpenArrow} alt="" /> */}
    </Wrapper>
  );
};

export default RSArrowButton;
