import styled from 'styled-components';

const BoardLeftVacation = styled.div`
  width: 967px;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;

const VacationTitle = styled.div`
  padding: 30px 0 20px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
`;

const VacationTable = styled.div`
  margin: 0 30px 40px 30px;
  display: grid;
  grid-template-columns: 104px 104px 104px 104px 104px 104px 104px;
  column-gap: 30px;
`;

const Table1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table1Name = styled.span`
  width: 63px;
  height: 28px;
  background: #FFEEF8;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F26497;
  margin-bottom: 20px;
`;

const Table1List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table2Name = styled.span`
  width: 76px;
  height: 28px;
  justify-content: center;
  background: #FFF2EE;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ED8D57;
  margin-bottom: 20px;
`;

const Table2List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table3Name = styled.span`
  width: 89px;
  height: 28px;
  justify-content: center;
  background: #FFF4D7;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #F4AC57;
  margin-bottom: 20px;
`;

const Table3List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table4 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table4Name = styled.span`

  width: 102px;
  height: 28px;
  justify-content: center;
  background: #D6F6D9;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #5EB066;
  margin-bottom: 20px;
`;

const Table4List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table5 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table5Name = styled.span`
  width: 84px;
  height: 28px;
  justify-content: center;
  background: #EEF4FF;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #779BF8;
  margin-bottom: 20px;
`;

const Table5List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table6 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table6Name = styled.span`
  width: 76px;
  height: 28px;
  justify-content: center;
  background: #EFF1FB;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #5A5AC2;
  margin-bottom: 20px;
`;

const Table6List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const Table7 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table7Name = styled.span`
  width: 102px;
  height: 28px;
  justify-content: center;
  background: #EEEEFF;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #7B7BE5;
  margin-bottom: 20px;
`;

const Table7List = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #667381;
`;

const index = () => {
  return <BoardLeftVacation>
    <VacationTitle>
      오늘 식스샵 휴가자
    </VacationTitle>
    <VacationTable>
      <Table1>
        <Table1Name>경영진</Table1Name>
        <Table1List>12:00 1시간 다혜<br/>12:00 1시간 다혜<br/>12:00 1시간 다혜<br/>12:00 1시간 다혜<br/>12:00 1시간 다혜</Table1List>
      </Table1>
      <Table2>
        <Table2Name>마케팅팀</Table2Name>
        <Table2List>12:00 1시간 다혜<br/>12:00 1시간 다혜<br/>12:00 1시간 다혜<br/>12:00 1시간 다혜</Table2List>
       </Table2>
      <Table3>
        <Table3Name>상점제작셀</Table3Name>
        <Table3List>12:00 1시간 다혜</Table3List>
       </Table3>
      <Table4>
        <Table4Name>서비스운영팀</Table4Name> 
        <Table4List>12:00 1시간 다혜</Table4List>
      </Table4>
      <Table5>
        <Table5Name>식스샵3팀</Table5Name>
        <Table5List>12:00 1시간 다혜</Table5List>
      </Table5>
      <Table6>
        <Table6Name>셀러리셀</Table6Name>
        <Table6List>12:00 1시간 다혜</Table6List>
      </Table6>
      <Table7>
        <Table7Name>커머스코어셀</Table7Name>
        <Table7List>12:00 1시간 다혜</Table7List>
       </Table7>
    </VacationTable>
  </BoardLeftVacation>;
};

export default index;
