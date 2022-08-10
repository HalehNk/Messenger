import React from 'react';

import Wrapper from '../Helpers/Wrapper';
import MessageInput from '../MessageInput/MessageInput';
import MainChatHeader from '../MainChatHeader/MainChatHeader';
import styles from './MainChat.module.css';
import MainChatMessages from '../MainChatMessages/MainChatMessages';

const MainChat = (props) => {
  return (
    <Wrapper>
      {/* CMT ye shart ba props.open baraye bororg kuchik kardn */}
      <div className={styles.mainChat_co}>
        <div
          className={`${
            props.open ? styles.mainChat_small : styles.mainChat_big
          } `}
        >
          <MainChatHeader />
          <MainChatMessages text={'Somme svir meir enn andre . . .'} />
          <MessageInput />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainChat;
