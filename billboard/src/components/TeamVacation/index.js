import styled from 'styled-components';

const BoardRightTeamVacation = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 522px;
  height: 286px;
`;

const TeamVacationTitle = styled.div`
  display: flex;
  padding: 30px 0px 27px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
`;
const TeamVacationToday = styled.div`
  margin-right: 6px;
`;

const TeamVacationName = styled.div`
  border-bottom: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const TeamVacationNameList = styled.div`
margin-left:3px;
`;

const TeamVacationNameTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid #222F3C;
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 5px;
`;

const TeamVacationPeople = styled.div`
`;

const index = () => {
  return <BoardRightTeamVacation>
    <TeamVacationTitle>
      <TeamVacationToday>
        오늘
      </TeamVacationToday>
       <TeamVacationName>
        <TeamVacationNameList></TeamVacationNameList>식스샵3팀
        <TeamVacationNameTriangle></TeamVacationNameTriangle>
      </TeamVacationName>
      <TeamVacationPeople>
        휴가자 💤
      </TeamVacationPeople>
    </TeamVacationTitle>
  </BoardRightTeamVacation>;
};

export default index;
