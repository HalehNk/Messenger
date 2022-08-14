import React, { useState, useEffect } from 'react';

import Wrapper from '../Helpers/Wrapper';
import MessageInput from '../MessageInput/MessageInput';
import MainChatHeader from '../MainChatHeader/MainChatHeader';
import styles from './MainChat.module.css';
import MainChatMessages from '../MainChatMessages/MainChatMessages';

const MainChat = (props) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // console.log(props.getPerson);
    //call kon ba shart, !getPerson bud call she, func avval ro call kone
    if (props.getPerson) {
      chatExist(props.getPerson.id);
    }
  }, [props.getPerson]);

  //fetch
  const chatExist = (id) => {
    fetch(
      `http://localhost:1337/api/chats?filters[Contact][id][$eq]=${id}&populate=*`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data.length > 0) {
          // age data.data null nabud setchat ro bargardune, age null bud createchat kone
          setChat(data.data[0]);
        } else {
          createChat();
        }
      });
  };

  //method func, chjuri ba fetch req post mifrestn? body in postmn
  function createChat() {
    fetch('http://localhost:1337/api/chats?populate=*', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          Owner: props.user.id,
          Contact: props.getPerson.id,
          Title:
            props.getPerson.attributes.FirstName +
            ' ' +
            props.getPerson.attributes.LastName,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChat(data.data);
      });
  }

  return (
    <Wrapper>
      {/* CMT ye shart ba props.open baraye bororg kuchik kardn */}
      <div className={styles.mainChat_co}>
        <div
          className={`${
            props.open ? styles.mainChat_small : styles.mainChat_big
          } `}
        >
          <MainChatHeader chat={chat} />
          <MainChatMessages text={'Somme svir meir enn andre . . .'} />
          <MessageInput />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainChat;
