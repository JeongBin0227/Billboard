import styled from 'styled-components';

import Search from '../Search/index';
import Day from '../Day/index';
import OKR from '../OKR/index';
import Vacation from '../Vacation/index';

const BoardLeft = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 78px 255px 212px 100%;
  row-gap: 20px;
`;

const index = () => {
  return (
    <BoardLeft>
      <Search />
      <Day />
      <Vacation />
      <OKR />
    </BoardLeft>
  );
};

export default index;
