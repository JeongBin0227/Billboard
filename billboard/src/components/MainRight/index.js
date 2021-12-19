import styled from 'styled-components';

import TeamVacation from '../TeamVacation/index';
import CS from '../CS/index';
import Shortcuts from '../Shortcuts/index';

const BoardRight = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 255px 398px;
  row-gap: 20px;
`;

const index = () => {
  return (
    <BoardRight>
      <TeamVacation />
      <CS />
      <Shortcuts />
    </BoardRight>
  );
};

export default index;
