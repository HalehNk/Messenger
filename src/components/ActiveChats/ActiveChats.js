import Wrapper from '../Helpers/Wrapper';
import addButton from '../../assets/img/ButtonAdd.png';
import styles from './ActiveChats.module.css';

const ActiveChats = () => {
  return (
    <Wrapper>
      <div className={styles.p_and_img_co}>
        <p className={styles.active_chats}>Active Chats</p>
        <img src={addButton} alt="" />
      </div>
    </Wrapper>
  );
};

export default ActiveChats;
