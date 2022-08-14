import React, { useState, useEffect } from 'react';

import ActiveChats from '../ActiveChats/ActiveChats';
import Wrapper from '../Helpers/Wrapper';
import Logo from '../Logo/Logo';
import MyProfile from '../MyProfile/MyProfile';
import SearchAndChats from '../LS_SearchAndChats/SearchAndChats';
import styles from './LeftSidebar.module.css';

const LeftSidebar = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // CMT sends req?? yup
    fetchContactsHandler();
  }, []);

  function fetchContactsHandler() {
    fetch('http://localhost:1337/api/contacts?populate=*')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let myprofile = data.data.filter((contact) => {
          if (contact.id === 11) return false;
          return true;
        });
        setContacts(myprofile);
      });
  }

  return (
    <Wrapper>
      <div className={styles.mainLeftSideBar}>
        <Logo />
        <MyProfile />
        <ActiveChats />
        <SearchAndChats
          contacts={contacts}
          setPerson={props.setPerson}
        ></SearchAndChats>
      </div>
    </Wrapper>
  );
};

export default LeftSidebar;
