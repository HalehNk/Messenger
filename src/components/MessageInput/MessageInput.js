import React, { useState, useEffect } from 'react';

import Wrapper from '../Helpers/Wrapper';
import SendButton from '../../assets/img/SendButton.png';
import Paperclip from '../../assets/img/Paperclip.png';
import Smile from '../../assets/img/Smile.png';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './MessageInput.module.css';

const MessageInput = (props) => {
  const { setMessages } = props;
  const [textMessage, setTextMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // two way binding faghat vaghti etefgh miofte ke azn view bekhaim yechizi befrestim, ba input bekhaym kar konim
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setTextMessage(value);
    console.log(value);
  };

  const sendMsgHandler = () => {
    fetch('http://localhost:1337/api/messages?populate=*', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          Text: textMessage,
          Owner: props.myUser.id,
          chat: props.chat.id,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMessages((prev) => [...prev, response.data]); //vafhti call back func {} nadashte bashe khod be khod return mikone
        setTextMessage('');
      })
      .catch((error) => {
        setShowModal(true);
      });
  };

  //NET
  const listener = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault();
      sendMsgHandler();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [textMessage]);

  return (
    <Wrapper>
      <div className={styles.inputAndButtons_container}>
        <div className={styles.inputAndButtons_co}>
          <div className={styles.input_message_co}>
            <input
              className={styles.input_message}
              type="text"
              value={textMessage}
              onChange={onChangeHandler}
              placeholder="Enter your message here"
            />
          </div>
          <div className={styles.buttons_co}>
            <div className="first_img_co">
              <img src={Smile} alt="" />
            </div>
            <div>
              <label className={styles.label_upload} htmlFor="uploading">
                <div className={styles.second_img_co}>
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
            <div
              className={styles.third_img_co}
              value={textMessage}
              onClick={sendMsgHandler}
            >
              <img className={styles.sendBtn} src={SendButton} alt="" />
            </div>
          </div>
        </div>
      </div>
      {showModal && <ErrorModal setShowModal={setShowModal}></ErrorModal>}
    </Wrapper>
  );
};

export default MessageInput;
