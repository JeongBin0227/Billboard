import React from 'react';
import styled from 'styled-components';
import logo from '../../../src/img/sixshop-symbol.svg';

const Header = styled.div`
  background-color: ffffff;
  width: 100%;
  height: 72px;
  align-items: center; /* 하위 요소들 수직 가운데정렬 */
  position: relative;
  box-shadow: 0px 0px 9px rgba(179, 179, 179, 0.7);
`;

const HeaderContentsrWapper2 = styled.div`
  min-width: 1600px;
  margin: auto;
`
const HeaderContentsWrapper = styled.div`
  margin: auto;
  max-width: 1600px;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
`;
const HeaderContentsLeft = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Logo = styled.div`
`;
const Issue = styled.div`
  padding: 0 24px 0 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #667381;
`;

const Chart = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #C6CACE;
`;

const HeaderContentsRight = styled.div`
  display: flex;
  margin: 24px 40px 24px 0;
`;
const Money = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoneyText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #222F3C;
`;

const MoneyDay = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7B7BE5;
  width: fit-content;
  padding: 5px 12px 5px 12px;
  height: fit-content;
  background: #EEEEFF;
  border-radius: 6px;
  margin-left: 10px;
`;

const Lunch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LunchText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #222F3C;
  margin-left: 20px;
`;

const LunchTime = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7B7BE5;
  width: fit-content;
  padding: 5px 12px 5px 12px;
  height: fit-content;
  background: #EEEEFF;
  border-radius: 6px;
  margin-left: 10px;
`;

const index = () => {
  return (
    <Header>
        <HeaderContentsrWapper2>
          <HeaderContentsWrapper>
            <HeaderContentsLeft>
              <Logo>
                <img src={logo} />
              </Logo>
              <Issue>사내소식</Issue>
              <Chart>통계청</Chart>
            </HeaderContentsLeft>
          <HeaderContentsRight>
            <Money>
              <MoneyText>💰 월급날</MoneyText>
              <MoneyDay>D-15</MoneyDay>
            </Money>
            <Lunch>
              <LunchText>🍚 밥타이머</LunchText>
              <LunchTime>3시간 42분</LunchTime>
            </Lunch>
            </HeaderContentsRight>
        </HeaderContentsWrapper>
        </HeaderContentsrWapper2>

    </Header>
  );
};

export default index;
