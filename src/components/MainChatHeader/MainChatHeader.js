import Wrapper from '../Helpers/Wrapper';
import styles from './MainChatHeader.module.css';

const MainChatHeader = () => {
  return (
    <Wrapper>
      <div className={styles.p_group_name_co}>
        <p className={styles.p_group_name}>Family chat</p>
      </div>
    </Wrapper>
  );
};

export default MainChatHeader;
