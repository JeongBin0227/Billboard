import React, { useState } from 'react';
import styled from 'styled-components';
import search from '../../../src/img/ico-search-line-big.svg';

const BoardLeftSearch = styled.div`
  width: 966px;
  height: 78px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  display: flex;
`;
const SearchImg = styled.img`
  padding: 27px 16px 27px 30px;
`;

const SearchText = styled.input`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #bfbfcc;
  padding-top: 27px;
`;

const Index = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    window.open(`https://www.google.com/search?q=${text}`, '_blank');
  };
  const keyPress = (e) => {
    if (e.key === 'Enter') {
      window.open(`https://www.google.com/search?q=${text}`, '_blank');
    }
  };

  return (
    <BoardLeftSearch>
      <SearchImg src={search} onClick={onClick} />
      <SearchText
        placeholder="구글에서 검색"
        onChange={onChange}
        value={text}
        onKeyPress={keyPress}
      />
    </BoardLeftSearch>
  );
};

export default Index;
