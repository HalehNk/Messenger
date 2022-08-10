import Wrapper from '../Helpers/Wrapper';
import Search from '../../assets/img/Search.png';
import styles from './InputSearch.module.css';

const InputSearch = () => {
  return (
    <Wrapper>
      <div className={styles.input_and_img}>
        <input
          className={styles.input_search}
          type="search"
          id="site-search"
          name=""
          placeholder="Search people"
        />
        <img className={styles.img_search} src={Search} alt="search img" />
      </div>
      <div className={styles.white_rectangle} />
    </Wrapper>
  );
};

export default InputSearch;
