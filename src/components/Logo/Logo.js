import Wrapper from '../Helpers/Wrapper';
import messengerLogo from '../../assets/img/Logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Wrapper>
      <div className={styles.img_logo_co}>
        <img src={messengerLogo} className={styles.img_logo} alt="logo img" />
        <div className={styles.horizontal_line} />
      </div>
    </Wrapper>
  );
};

export default Logo;
