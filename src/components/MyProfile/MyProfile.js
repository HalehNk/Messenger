import Wrapper from '../Helpers/Wrapper';
import profilePic from '../../assets/img/p1.png';
import settingImg from '../../assets/img/ButtonSettings.png';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  return (
    <Wrapper>
      <div className={styles.MyProfile_container}>
        <div className={styles.img_and_p_co}>
          <div className={styles.img_co}>
            <img
              src={profilePic}
              className={styles.img_profile}
              alt="profile"
            />
          </div>
          <div className={styles.all_p_co}>
            <p className={styles.p_name}>George Tarielashvili</p>
            <p className={styles.p_role}>Senior UI/UX Designer</p>
            <p className={styles.p_last_seen}>Online</p>
          </div>
        </div>
        <div className={styles.setting_co}>
          <img src={settingImg} className={styles.img_setting} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default MyProfile;
