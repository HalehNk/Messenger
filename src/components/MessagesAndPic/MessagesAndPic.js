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

      {/* <div className={styles.Co_co}>
        {props.msg((img, index) => (
          <div className={styles.img_p_co} img={img} index={index}>
            {props.messages.map((img, index) => (
              <img
                className={styles.person_img}
                src={profilePic1}
                key={index}
                img={img}
                alt=""
              />
            ))}
            {props.msg((pm, index) => (
              <p key={index} className={styles.p_message}>
                {pm.attributes.Text}
              </p>
            ))}
          </div>
        ))}
      </div> */}

      {/* // CMT this one kinda works */}
      {/* <div className={styles.Co_co}>
        {props.messages.map((img, index) => (
          <div className={styles.img_p_co}>
            <img className={styles.person_img} src={profilePic1} alt="" />

            <p className={styles.p_message}>gfdfghjkh</p>
          </div>
        ))}
        {props.messages.map((img, index) => (
          <div className={styles.img_p_co}>
            <img className={styles.person_img} src={profilePic1} alt="" />

            <p className={styles.p_message}>gfdfghjkh</p>
          </div>
        ))}
      </div> */}

      {/* <div className={styles.Co_co}>
          <div className={styles.img_p_co}>
            {props.messages.map((img, index) => (
              <img
                className={styles.person_img}
                src={profilePic1}
                key={index}
                img={img}
                alt=""
              />
            ))}
            {props.messages.map((pm, index) => (
              <p className={styles.p_message} key={index}>
                {pm.attributes.Text}
              </p>
            ))}
          </div>
      </div> */}

      {/* <div className={styles.img_p_co}>
        {props.msg((img, index) => (
          <img
            key={index}
            img={img}
            className={styles.person_img}
            src={profilePic1}
            alt=""
          />
        ))}
        <div className={styles.p_message_co}>
          {props.msg((pm, index) => (
            <p key={index} className={styles.p_message}>
              {pm.attributes.Text}
            </p>
          ))}
        </div>
      </div> */}
    </Wrapper>
  );
}

export default MessagesAndPic;
