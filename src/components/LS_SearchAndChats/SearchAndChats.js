import Wrapper from '../Helpers/Wrapper';
import LSChats from '../LS_Chats/LSChats';
import InputSearch from '../LS_InputSearch/InputSearch';
import styles from './SearchAndChats.module.css';

const SearchAndChats = (props) => {
  return (
    <Wrapper>
      <div className={styles.input_and_search_co}>
        <InputSearch></InputSearch>
        {props.contacts.map((contact, index) => (
          <LSChats contact={contact}></LSChats>
        ))}
      </div>
    </Wrapper>
  );
};

export default SearchAndChats;
