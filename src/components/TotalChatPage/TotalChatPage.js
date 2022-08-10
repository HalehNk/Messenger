import React, { useState } from 'react';

import MainChat from '../MainChat/MainChat';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Wrapper from '../Helpers/Wrapper';
import styles from './TotalChatPage.module.css';

const TotalChatPage = () => {
  // CMT it shows if right sidebar is closed or open
  // CMT the true is for default state, is it open or closed?
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <Wrapper>
      <div className={styles.totalChatPage_co}>
        <div className={styles.totalChatPage}>
          <LeftSidebar />
          <MainChat open={rightSidebarOpen} />
          <RightSidebar
            open={rightSidebarOpen}
            // CMT WTF is this function doing?
            setOpen={(status) => setRightSidebarOpen(status)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default TotalChatPage;
