import './App.css';
import styled from 'styled-components';
import logo from '../src/img/sixshop-symbol.svg';
import search from '../src/img/ico-search-line-big.svg';
import people from '../src/img/people.png';
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
const Main = styled.div`
  background-color: #F4F5F6; 
  min-width: 1520px;
  padding: 24px 40px 200px 40px;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const BoardContentsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1.54fr 1fr;
`;

const BoardLeft = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 78px 255px 212px 100%;
  row-gap: 20px;
`;
const BoardLeftSearch = styled.div`
  width: 966px;
  height: 78px;
  background-color: #ffffff; 
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  display: flex;
`;
const SearchImg = styled.img`
  padding: 27px 16px 27px 30px
`;

const SearchText = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #BFBFCC;
  padding-top: 27px
`;

const BoardLeftDay = styled.div`
  width: 966px;
  height: 255px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;
const BoardLeftDayTop = styled.div`
  display: flex;
  position: relative;
  justify-contents: flex-start;
  margin: 30px 17px 0px 30px;
`;

const BoardLeftDayDate = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
  margin-right: 17px;
 
`;

const BoardLeftDaySprint = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  color: #222F3C;
  margin-top: 5px;
`;

const BoardLeftDayMiddle = styled.div`
  display: flex;
  margin: 17px auto 39px 30px;
`;

const BoardLeftDayIssue = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #222F3C;
  margin-right: 6px;
`;

const BoardLeftDayIssueNumber = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #7B7BE5;
  width: 20px;
  height: 21px;
  left: 199px;
  top: 274px;
  background-color: #EEEEFF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoardLeftDayBottom = styled.div`
 margin: 0 30px 36px 30px; 
`;

const BoardLeftDayPeople = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const BoardLeftDayBottomBubble = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #7B7BE5;
 
`;

const BoardLeftDayBottomImoji = styled.span`
  font-size: 40px;
  `;

const BoardLeftDayBottomLine = styled.div`
  width: 906px;
  height: 8px;
`;
const BoardLeftOKR = styled.div`
  width: 967px;
  height: 212px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;

const BoardLeftVacation = styled.div`
  width: 967px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;

const BoardRight = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 255px 398px;
  row-gap: 20px;
`;

const BoardRightTeamVacation = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 522px;
  height: 286px;
`;
const BoardRightCS = styled.div`
  height: 255px;
  display: grid;
  grid-template-columns: 296px 206px;
  column-gap: 20px;
  `;
const CSTomorrow = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 296px;
  height: 255px;
`;

const CSHoliday = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 206px;
  height: 255px;
`;
const BoardRightShortcuts = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 521px;
  height: 398px;  
`;

function App() {
  return (
    <>
      <Header>
        <HeaderContentsWrapper>
          <HeaderContentsLeft>
            <Logo>
              <img src={logo}/>
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
      <Main>
        <BoardContentsWrapper>
          <BoardLeft>
            <BoardLeftSearch>
              <SearchImg src={search} />
              <SearchText>구글에서 검색</SearchText>
            </BoardLeftSearch>
            <BoardLeftDay>
              <BoardLeftDayTop>
                <BoardLeftDayDate>10월 28일 MON</BoardLeftDayDate>
                <BoardLeftDaySprint>96 Sprint</BoardLeftDaySprint>
              </BoardLeftDayTop>
              <BoardLeftDayMiddle>
                <BoardLeftDayIssue>이번주사내소식</BoardLeftDayIssue>
                <BoardLeftDayIssueNumber>
                  3
                </BoardLeftDayIssueNumber>
              </BoardLeftDayMiddle>
              <BoardLeftDayBottom>
                <BoardLeftDayPeople>
                  <BoardLeftDayBottomBubble>
                    다들 일어나세요
                  </BoardLeftDayBottomBubble>
                  <BoardLeftDayBottomImoji>
                      🏃‍♀️
                  </BoardLeftDayBottomImoji>
                </BoardLeftDayPeople>
                <BoardLeftDayBottomLine>
                  다들일어나세요
                </BoardLeftDayBottomLine>
              </BoardLeftDayBottom>
            </BoardLeftDay>
            <BoardLeftVacation>휴가</BoardLeftVacation>
            <BoardLeftOKR>okr</BoardLeftOKR>
          </BoardLeft>
          <BoardRight>
            <BoardRightTeamVacation>팀휴가</BoardRightTeamVacation>
            <BoardRightCS>
              <CSTomorrow>내일</CSTomorrow>
              <CSHoliday>휴일</CSHoliday>
            </BoardRightCS>
            <BoardRightShortcuts>바로가기</BoardRightShortcuts>
          </BoardRight>
        </BoardContentsWrapper>
      </Main>
    </>
  );
}

export default App;
