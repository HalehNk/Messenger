import Wrapper from '../Helpers/Wrapper';
import profilePic1 from '../../assets/img/p2.png';
import styles from './MainChatMessages.module.css';

const MainChatMessages = (props) => {
  return (
    <Wrapper>
      <div className={styles.whole_message_co}>
        <div className={styles.img_p_co}>
          <img className={styles.person_img} src={profilePic1} alt="" />
          <div className={styles.ps_co}>
            <div className={styles.p_message_co}>
              <p className={styles.p_message}>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainChatMessages;
