import Wrapper from '../Helpers/Wrapper';
import styles from './MainChatHeader.module.css';

const MainChatHeader = (props) => {
  return (
    <Wrapper>
      <div className={styles.p_group_name_co}>
        <p className={styles.p_group_name}>
          {props.chat ? props.chat.attributes.Title : 'Select a chat'}
        </p>
      </div>
    </Wrapper>
  );
};

export default MainChatHeader;
