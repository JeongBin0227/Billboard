import React from 'react';
import './App.css';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import Count from './components/Count/Count';

const Header = styled.div`
  background-color: red;
  margin: auto; /* header의 양쪽 여백(margin)을 동등하게 맞춤 -> 수평가운데정렬 */
  width: 100%;
  height: 215px;
  display: flex;
  align-items: center; /* 하위 요소들 수직 가운데정렬 */
  position: relative;
`;

const Main = styled.div`
  background: darkgray;
  height: 1000px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 100px;
`;

const Board = styled.div`
  background: blue;
`;

const BoardMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  height: 300px;
`;

const Link = styled.div`
  background: green;
`;
function App() {
  return (
    <React.Suspense fallback={null}>
      <Header>
        <div>hi</div>
        <Count />
        <div></div>
        <div></div>
      </Header>
      <Main>
        <Board>
          <BoardMain>
            <div style={{ backgroundColor: 'lightgrey' }}>dsad</div>
            <div style={{ backgroundColor: 'lightgrey' }}>dsad</div>
          </BoardMain>
        </Board>
        <Link></Link>
      </Main>
    </React.Suspense>
  );
}

export default App;
