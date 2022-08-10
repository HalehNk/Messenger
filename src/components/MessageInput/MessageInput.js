import Wrapper from '../Helpers/Wrapper';
import SendButton from '../../assets/img/SendButton.png';
import Paperclip from '../../assets/img/Paperclip.png';
import Smile from '../../assets/img/Smile.png';
import styles from './MessageInput.module.css';

const MessageInput = () => {
  return (
    <Wrapper>
      <div className={styles.inputAndButtons_container}>
        <div className={styles.inputAndButtons_co}>
          <div className={styles.input_message_co}>
            <input
              className={styles.input_message}
              type="text"
              placeholder="Enter your message here"
            />
          </div>
          <div className={styles.buttons_co}>
            <div className="first_img_co">
              <img src={Smile} alt="" />
            </div>
            {/* CMT put this paperclip img in the lable */}
            {/* <div className="second_img_co">
              <img src={Paperclip} alt="" />
            </div> */}
            <div>
              <label className={styles.label_upload} htmlFor="uploading">
                <div className="second_img_co">
                  <img src={Paperclip} alt="" />
                </div>
              </label>
              <input
                className={styles.input_upload}
                type="file"
                id="uploading"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </div>
            <div className="third_img_co">
              <img src={SendButton} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageInput;
