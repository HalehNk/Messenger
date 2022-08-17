import React from 'react';
import Wrapper from '../Helpers/Wrapper';
import profilePic1 from '../../assets/img/p2.png';
import styles from './MessagesAndPic.module.css';

function MessagesAndPic(props) {
  // az props fromOwner ro begir va pm haro chap o rast kon
  const { fromOwner } = props;
  console.log(fromOwner);
  return (
    <Wrapper>
      <div className={fromOwner ? styles.img_p_co_right : styles.img_p_co_left}>
        <img className={styles.person_img} src={profilePic1} alt="" />
        <p
          className={fromOwner ? styles.p_message_right : styles.p_message_left}
        >
          {props.msg.attributes.Text}
        </p>
      </div>
    </Wrapper>
  );
}

export default MessagesAndPic;
