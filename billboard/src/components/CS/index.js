import styled from 'styled-components';

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

const CSTomorrowTop = styled.div`
 display: flex;
 align-items: center;
`;

const CSTomorrowTopText = styled.span`
  margin: 30px 32px 28px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
`;

const CSTomorrowTopDay = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
  height: fit-content;
  padding: 5px 12px 5px 12px;
  display: flex;
  align-items: center;
  background: #EEEEFF;
  border-radius: 6px;
  color: #7B7BE5;
`;


const CSTomorrowBottom = styled.div`
  margin: 0 28px 25px 28px;
  display: grid;
  grid-template-columns: 60px 60px 60px;
  column-gap: 30px;
`;

const CSTomorrow1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CSTomorrow1Time = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #667381;
  margin-bottom: 6px;
`;

const CSTomorrow1Profile = styled.div`
  border-radius: 527px;
  width: 60px;
  height: 60px;
  background-color: #EEEEFF;
  margin-bottom: 12px;
`;

const CSTomorrow1People = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
  height: fit-content;
  padding: 5px 12px 5px 12px;
  display: flex;
  align-items: center;
  background: #EEEEFF;
  border-radius: 6px;
  color: #7B7BE5;
`;

const CSTomorrow2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CSTomorrow2Time = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #667381;
  margin-bottom: 6px;
`;

const CSTomorrow2Profile = styled.div`
  border-radius: 527px;
  width: 60px;
  height: 60px;
  background-color: #EEEEFF;
  margin-bottom: 12px;
`;

const CSTomorrow2People = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
  height: fit-content;
  padding: 5px 12px 5px 12px;
  display: flex;
  align-items: center;
  background: #EEEEFF;
  border-radius: 6px;
  color: #7B7BE5;
`;

const CSTomorrow3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CSTomorrow3Time = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #667381;
  margin-bottom: 6px;
`;

const CSTomorrow3Profile = styled.div`
  border-radius: 527px;
  width: 60px;
  height: 60px;
  background-color: #EEEEFF;
  margin-bottom: 12px;
`;

const CSTomorrow3People = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
  height: fit-content;
  padding: 5px 12px 5px 12px;
  display: flex;
  align-items: center;
  background: #EEEEFF;
  border-radius: 6px;
  color: #7B7BE5;
`;

const CSHoliday = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 206px;
  height: 255px;
`;

const CSHolidayTop = styled.div`
 display: flex;
 align-items: center;
`;

const CSHolidayTopText = styled.span`
  margin: 30px 32px 28px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
`;

const CSHolidayBottom = styled.div`
`;

const index = () => {
  return (
    <BoardRightCS>
      <CSTomorrow>
        <CSTomorrowTop>
          <CSTomorrowTopText>내일의 CS</CSTomorrowTopText>
          <CSTomorrowTopDay>12월 21일</CSTomorrowTopDay>
        </CSTomorrowTop>
        <CSTomorrowBottom>
          <CSTomorrow1>
            <CSTomorrow1Time>오전</CSTomorrow1Time>
            <CSTomorrow1Profile></CSTomorrow1Profile>
            <CSTomorrow1People>
              다혜
            </CSTomorrow1People>
          </CSTomorrow1>
          <CSTomorrow2>
            <CSTomorrow2Time>오후</CSTomorrow2Time>
            <CSTomorrow2Profile></CSTomorrow2Profile>
            <CSTomorrow2People>
              다혜
            </CSTomorrow2People>
          </CSTomorrow2>
      
          <CSTomorrow3>
            <CSTomorrow3Time>야간</CSTomorrow3Time>
            <CSTomorrow3Profile></CSTomorrow3Profile>
            <CSTomorrow3People>
              다혜
            </CSTomorrow3People>
          </CSTomorrow3>
        </CSTomorrowBottom>
      </CSTomorrow>
        <CSHoliday>
        <CSHolidayTop>
          <CSHolidayTopText>휴일의 CS
           </CSHolidayTopText>
         
        </CSHolidayTop>  
          <CSHolidayBottom>아래</CSHolidayBottom>
        </CSHoliday>
   </BoardRightCS>
   );
};

export default index;
