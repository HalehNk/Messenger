import Wrapper from '../Helpers/Wrapper';
import { useState } from 'react';
import Search from '../../assets/img/Search.png';
import styles from './InputSearch.module.css';

const InputSearch = (props) => {
  // faghat value ro migirm va changeinput search ro seda mizani, ke az parent unade
  const [inputSearch, setInputSearch] = useState('');
  const searchHandler = (event) => {
    const { value } = event.target;
    setInputSearch(value);
    const { changeInputSearch } = props;
    changeInputSearch(value);
  };

  return (
    <Wrapper>
      <div className={styles.input_and_img}>
        <input
          className={styles.input_search}
          type="text"
          id="site-search"
          name=""
          value={inputSearch}
          placeholder="Search people"
          onChange={searchHandler}
        />

        <img className={styles.img_search} src={Search} alt="search img" />
      </div>
      <div className={styles.white_rectangle} />
    </Wrapper>
  );
};

export default InputSearch;
