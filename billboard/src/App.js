import './App.css';
import styled from 'styled-components';

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
`;
const BoardLeftDay = styled.div`
  width: 966px;
  height: 255px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
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
            <Logo>로고</Logo>
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
            <BoardLeftSearch>구글</BoardLeftSearch>
            <BoardLeftDay>10월28일</BoardLeftDay>
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
