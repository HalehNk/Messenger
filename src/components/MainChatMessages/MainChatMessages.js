import React, { useState, useEffect } from 'react';
import Wrapper from '../Helpers/Wrapper';
import MessagesAndPic from '../MessagesAndPic/MessagesAndPic';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './MainChatMessages.module.css';

const MainChatMessages = (props) => {
  const { messages } = props;
  const { setMessages } = props;
  const [showModal, setShowModal] = useState(false);

  const fetchChat = () => {
    fetch(
      `http://localhost:1337/api/messages?filters[chat][id][$eq]=${props.chat.id}&populate=*&sort[0]=createdAt:ASC`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setMessages(data.data);
      })
      .catch((error) => {
        setShowModal(true);
      });
  };

  useEffect(() => {
    if (props.chat) {
      fetchChat();
    }
  }, [props.chat]);

  return (
    <Wrapper>
      <div className={styles.whole_message_co}>
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <MessagesAndPic
              fromOwner={props.myUser.id === msg.attributes.Owner.data.id}
              key={index}
              msg={msg}
              className={styles.img_and_msg}
            />
          ))}
      </div>
      {showModal && <ErrorModal setShowModal={setShowModal}></ErrorModal>}
    </Wrapper>
  );
};

export default MainChatMessages;
