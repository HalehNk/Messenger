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
          open={props.open} //baraye inke jahate arrow moshakhas she
          setOpen={props.setOpen} // ru clicke button setState taghir mikone, umade inja ke faghat bere tu arrow button
        ></RSArrowButton>
      </div>
    </Wrapper>
  );
};

export default RightSidebar;
