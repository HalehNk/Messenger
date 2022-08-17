import React, { useState, useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper';
import settingImg from '../../assets/img/ButtonSettings.png';
import { getUser } from '../../utilies/UserService';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const [user, setUser] = useState(null); //{} == null
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        setShowModal(true);
      });
    //WHY then ha ro ruye useEffect zadim na unjayi ke fetch kardim? promise ta zamani ke .then rush seda nakhore call nmishe, .then ro unjayi seda mizanim ke data bakhaim
    // .then((contactResponse) => {
    //   return contactResponse.json();
    // })
    // .then((data) => {
    //   setUser(data.data);
    // });
  }, []);

  //the second .then is an object

  return (
    <Wrapper>
      {user && (
        <div className={styles.MyProfile_container}>
          <div className={styles.img_and_p_co}>
            <div className={styles.img_co}>
              <img
                src={
                  'http://localhost:1337' +
                  user.attributes.ProfileIcon.data.attributes.formats.thumbnail
                    .url
                }
                className={styles.img_profile}
                alt="profile"
              />
            </div>
            <div className={styles.all_p_co}>
              <p className={styles.p_name}>
                {user.attributes.FirstName} {user.attributes.LastName}
              </p>
              <p className={styles.p_role}>Senior UI/UX Designer</p>
              <p className={styles.p_last_seen}>Online</p>
            </div>
          </div>
          <div className={styles.setting_co}>
            <img src={settingImg} className={styles.img_setting} alt="" />
          </div>
        </div>
      )}
      {showModal && <ErrorModal setShowModal={setShowModal}></ErrorModal>}
    </Wrapper>
  );
};

export default MyProfile;
