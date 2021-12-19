import './App.css';
import styled from 'styled-components';

const Header = styled.div`
  background-color: ffffff;
  margin: auto;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center; /* 하위 요소들 수직 가운데정렬 */
  position: relative;
  box-shadow: 0px 0px 9px rgba(179, 179, 179, 0.7);
`;
const HeaderContentsWrapper = styled.div`
  width: 1600px;
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
const HeaderContentsRight = styled.div`
  display: flex;
  margin: 24px 40px 24px 0;
`;
const Logo = styled.div``;
const Issue = styled.div`
  padding: 0 24px 0 20px;
`;
const Main = styled.div`
  min-width: 1500px;
  padding: 24px 40px 0 40px;
  height: auto;
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
  background-color: lightgrey;
  height: 300px;
`;

const BoardRight = styled.div`
  background-color: lightgrey;
  height: 300px;
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
          <BoardLeft>dsad</BoardLeft>
          <BoardRight>fff</BoardRight>
        </BoardContentsWrapper>
      </Main>
    </>
  );
}

export default App;
