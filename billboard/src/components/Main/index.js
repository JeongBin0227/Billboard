import styled from 'styled-components';

import MainLeft from '../MainLeft/index';
import MainRight from '../MainRight/index';

const Main = styled.div`
  background-color: #f4f5f6;
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

const index = () => {
  return (
    <Main>
      <BoardContentsWrapper>
        <MainLeft />
        <MainRight />
      </BoardContentsWrapper>
    </Main>
  );
};

export default index;
