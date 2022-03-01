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
  color: #222f3c;
`;

const VacationTable = styled.div`
  margin: 0 30px 40px 30px;
  display: grid;
  grid-template-columns: 121px 121px 121px 121px 121px 104px 104px;
  column-gap: 30px;
`;

const Table1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table1Name = styled.span`
  width: 120px;
  height: 28px;
  background: #ffeef8;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f26497;
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
  width: 120px;
  height: 28px;
  justify-content: center;
  background: #fff2ee;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ed8d57;
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
  width: 120px;
  height: 28px;
  justify-content: center;
  background: #fff4d7;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #f4ac57;
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
  width: 120px;
  height: 28px;
  justify-content: center;
  background: #d6f6d9;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #5eb066;
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
  width: 120px;
  height: 28px;
  justify-content: center;
  background: #eef4ff;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #779bf8;
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
  width: 120px;
  height: 28px;
  justify-content: center;
  background: #eff1fb;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #5a5ac2;
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
  background: #eeeeff;
  border-radius: 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #7b7be5;
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
  return (
    <BoardLeftVacation>
      <VacationTitle>오늘 식스샵 휴가자</VacationTitle>
      <VacationTable>
        <Table1>
          <Table1Name>식스샵2 코어셀</Table1Name>
          <Table1List>
            11:00 1.5시간 재석
            <br />
            12:30 0.5시간 홍준
            <br />
            14:00 1시간 이슬
            <br />
            15:00 1시간 기승
            <br />
            16:00 1시간 승현
          </Table1List>
        </Table1>
        <Table2>
          <Table2Name>스토어 프론트셀</Table2Name>
          <Table2List>
            12:00 1시간 정빈
            <br />
            12:00 1시간 지혜
            <br />
            14:00 2시간 은상
            <br />
            15:00 1시간 우식
          </Table2List>
        </Table2>
        <Table3>
          <Table3Name>PCM 통합셀</Table3Name>
          <Table3List>
            12:00 1시간 웅재
            <br />
            12:00 1시간 태경
            <br />
            15:00 1시간 대익
          </Table3List>
        </Table3>
        <Table4>
          <Table4Name>마케팅팀</Table4Name>
          <Table4List>12:00 1시간 도희</Table4List>
        </Table4>
        <Table5>
          <Table5Name>경영지원팀</Table5Name>
          <Table5List>12:00 1시간 주호</Table5List>
        </Table5>
        <Table6>
          <Table6Name>서비스운영팀</Table6Name>
          <Table6List>12:00 1시간 나래</Table6List>
        </Table6>
      </VacationTable>
    </BoardLeftVacation>
  );
};

export default index;
