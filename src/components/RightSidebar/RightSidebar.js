import React from 'react';

import Wrapper from '../Helpers/Wrapper';
import RSArrowButton from '../RS_ArrowButton/RSArrowButton';
import styles from './RightSidebar.module.css';

const RightSidebar = (props) => {
  return (
    <Wrapper>
      <div
        className={`${
          props.open
            ? styles.mainRightSideBar_big
            : styles.mainRightSideBar_small
        } `}
      >
        <RSArrowButton
          open={props.open}
          setOpen={props.setOpen}
        ></RSArrowButton>
      </div>
    </Wrapper>
  );
};

export default RightSidebar;
