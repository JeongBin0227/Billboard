import React from 'react';
import styled from 'styled-components';
import logo from '../../../src/img/sixshop-symbol.svg';

const Header = styled.div`
  background-color: ffffff;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center; /* 하위 요소들 수직 가운데정렬 */
  position: relative;
  box-shadow: 0px 0px 9px rgba(179, 179, 179, 0.7);
`;
const HeaderContentsWrapper = styled.div`
  min-width: 1600px;
  margin: 0 auto 0 40px;
  height: 72px;
  display: flex;
  justify-content: left;
`;
const HeaderContentsLeft = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const HeaderContentsRight = styled.div`
  display: flex;
  margin: 24px 40px 24px 0;
`;
const Logo = styled.div``;
const Issue = styled.div`
  padding: 0 24px 0 20px;
`;

const index = () => {
  return (
    <Header>
      <HeaderContentsWrapper>
        <HeaderContentsLeft>
          <Logo>
            <img src={logo} />
          </Logo>
          <Issue>사내소식</Issue>
          <div>통계청</div>
        </HeaderContentsLeft>
        <HeaderContentsRight>
          <div>월급날</div>
          <div>밥시간</div>
        </HeaderContentsRight>
      </HeaderContentsWrapper>
    </Header>
  );
};

export default index;
