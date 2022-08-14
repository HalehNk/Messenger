import Wrapper from '../Helpers/Wrapper';
// import secondperson from '../../assets/img/p2.png';
import styles from './LSChats.module.css';

const LSChats = (props) => {
  const clickOnpersonHanler = () => {
    props.setPerson(props.contact);
  };

  return (
    <Wrapper>
      <div className={styles.LS_three_info} onClick={clickOnpersonHanler}>
        <div className={styles.img_name_lastPm}>
          <div className={styles.img_contact_person_co}>
            <img
              className={styles.img_contact_person}
              src={
                'http://localhost:1337' +
                props.contact.attributes.ProfileIcon.data.attributes.formats
                  .thumbnail.url
              }
              alt=""
            />
          </div>
          <div className={styles.chat_person_msg_co}>
            <div className={styles.chat_person_first_name}>
              {props.contact.attributes.FirstName}
            </div>
            <div className={styles.chat_person_last_name}>
              {props.contact.attributes.LastName}
            </div>
            <div className={styles.chat_person_msg}>
              Something awfully urgent
            </div>
          </div>
        </div>
        <div className={styles.Unread_msg_time_date}>Today</div>
      </div>
    </Wrapper>
  );
};

export default LSChats;

// CMT sending text https://www.youtube.com/watch?v=pk8woKFBbT0
