import React, { useState, useEffect } from 'react';

import Wrapper from '../Helpers/Wrapper';
import MessageInput from '../MessageInput/MessageInput';
import MainChatHeader from '../MainChatHeader/MainChatHeader';
import MainChatMessages from '../MainChatMessages/MainChatMessages';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './MainChat.module.css';

const MainChat = (props) => {
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //call kon ba shart, !getPerson bud call she, func avval ro call kone
    //WHY ba id?
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
        console.log(response);
        return response.json(); //json to be data objs tabdil mikone, az halate string dar miad // string sar va tah ro mizanim
      })
      .then((data) => {
        if (data.data.length > 0) {
          // age data.data null nabud setchat ro bargardune, age null bud createchat kone
          setChat(data.data[0]);
        } else {
          createChat();
        }
      })
      .catch((error) => {
        setShowModal(true);
      });
  };

  //method func, chjuri ba fetch req post mifrestn? body in postmn
  function createChat() {
    fetch('http://localhost:1337/api/chats?populate=*', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          // user ro befrest ta msg&pic
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
        setChat(data.data); //dare json ro set mikone // gharae chataro bgire set kone
      })
      .catch((error) => {
        // catch vaghti etefagh miofte ke api call error bede va response vojud nadashte bashe
        setShowModal(true);
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
          <MainChatMessages
            chat={chat}
            myUser={props.user}
            messages={messages}
            setMessages={setMessages}
          />
          {chat && (
            <MessageInput
              chat={chat}
              myUser={props.user}
              setMessages={setMessages}
            />
          )}
        </div>
      </div>
      {showModal && <ErrorModal setShowModal={setShowModal}></ErrorModal>}
    </Wrapper>
  );
};

export default MainChat;
