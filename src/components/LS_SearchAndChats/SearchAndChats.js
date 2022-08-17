import React, { useState } from 'react';

import Wrapper from '../Helpers/Wrapper';
import LSChats from '../LS_Chats/LSChats';
import InputSearch from '../LS_InputSearch/InputSearch';
import styles from './SearchAndChats.module.css';

const SearchAndChats = (props) => {
  const [searchResult, setSearchResult] = useState([]); //contacts avale ro ba fetch migiri pas midi be child ke rush inkaro kone va brize tu search result
  const [searchText, setSearchText] = useState(''); //the text that input gets, bayad dashte basham ke bar asasesh istam ro filter konm,ke update she

  const searchInputHandler = (value) => {
    const { contacts } = props;
    setSearchText(value);
    //CMT this is where search happens
    let result = contacts.filter((contact) => {
      const nameTotal =
        contact.attributes.FirstName + ' ' + contact.attributes.LastName;
      if (nameTotal.toLowerCase().includes(value)) {
        return true;
      }
      return false;
    });
    setSearchResult(result);
  };

  //CMT crate a state for search input, both value and set state should be here
  return (
    <Wrapper>
      <div className={styles.input_and_search_co}>
        <InputSearch changeInputSearch={searchInputHandler} />
        {/* CMT tu hame contact ha begard */}

        {/* shart kon in dota ro */}
        {!searchText
          ? props.contacts.map((contact, index) => (
              <LSChats
                key={index}
                contact={contact}
                setPerson={props.setPerson}
              ></LSChats>
            ))
          : searchResult.map((contact, index) => (
              <LSChats
                key={index}
                contact={contact}
                setPerson={props.setPerson}
              />
              // CMT an array of contacts , indexe array ro be onvane key midim, baes mishe compiler ghati nkone ke hamash ye componente, befahme bug nist
            ))}
      </div>
    </Wrapper>
  );
};

export default SearchAndChats;
