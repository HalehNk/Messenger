import React, { useState, useEffect } from 'react';

import MainChat from '../MainChat/MainChat';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Wrapper from '../Helpers/Wrapper';
import { getUser } from '../../utilies/UserService';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './TotalChatPage.module.css';

const TotalChatPage = () => {
  // CMT it shows if right sidebar is closed or open
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [getPerson, setGetPerson] = useState(null); //null chon obj mikham
  const [user, setUser] = useState(null); //{} == null
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Wrapper>
      <div className={styles.totalChatPage_co}>
        <div className={styles.totalChatPage}>
          <LeftSidebar setPerson={setGetPerson} />
          <MainChat open={rightSidebarOpen} getPerson={getPerson} user={user} />
          <RightSidebar
            open={rightSidebarOpen}
            // CMT WTF is this function doing? logic set shodane data tuye state i ke male parente va child gharare taghiresh bede
            // CMT dare mige status ro begir bezar to setRightSidebarOpen, bad rightSidebarOpen update mishe va status ro mide be be RightSidebar va MainChat
            setOpen={(status) => setRightSidebarOpen(status)}
          />
        </div>
      </div>
      {showModal && <ErrorModal setShowModal={setShowModal}></ErrorModal>}
    </Wrapper>
  );
};

export default TotalChatPage;
