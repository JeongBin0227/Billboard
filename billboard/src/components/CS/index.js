import styled from 'styled-components';
import React from 'react';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { countState } from '../../recoil/count';
// import {
//   csSelector,
//   eventsSelector,
//   vacationsSelector,
//   healthSelector,
//   weatherSelector,
// } from '../../recoil/data';
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
  color: #222f3c;
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
  background: #eeeeff;
  border-radius: 6px;
  color: #7b7be5;
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
  background-color: #eeeeff;
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
  background: #eeeeff;
  border-radius: 6px;
  color: #7b7be5;
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
  background-color: #eeeeff;
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
  background: #eeeeff;
  border-radius: 6px;
  color: #7b7be5;
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
  background-color: #eeeeff;
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
  background: #eeeeff;
  border-radius: 6px;
  color: #7b7be5;
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
  color: #222f3c;
`;

const CSHolidayBottom = styled.div``;

const CS = () => {
  // const user1 = useRecoilValue(csSelector);
  // const user2 = useRecoilValue(eventsSelector);
  // const user3 = useRecoilValue(vacationsSelector);
  // const user4 = useRecoilValue(healthSelector);
  // const user5 = useRecoilValue(weatherSelector);
  // console.log(user1);
  // console.log(user2);
  // console.log(user3);
  // console.log(user4);
  // console.log(user5);
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
            <CSTomorrow1People>정빈</CSTomorrow1People>
          </CSTomorrow1>
          <CSTomorrow2>
            <CSTomorrow2Time>오후</CSTomorrow2Time>
            <CSTomorrow2Profile></CSTomorrow2Profile>
            <CSTomorrow2People>웅재</CSTomorrow2People>
          </CSTomorrow2>

          <CSTomorrow3>
            <CSTomorrow3Time>야간</CSTomorrow3Time>
            <CSTomorrow3Profile></CSTomorrow3Profile>
            <CSTomorrow3People>태경</CSTomorrow3People>
          </CSTomorrow3>
        </CSTomorrowBottom>
      </CSTomorrow>
      <CSHoliday>
        <CSHolidayTop>
          <CSHolidayTopText>휴일의 CS</CSHolidayTopText>
        </CSHolidayTop>
        <CSTomorrowBottom>
          <CSTomorrow1>
            <CSTomorrow1Time>오전</CSTomorrow1Time>
            <CSTomorrow1Profile></CSTomorrow1Profile>
            <CSTomorrow1People>나래</CSTomorrow1People>
          </CSTomorrow1>
          <CSTomorrow2>
            <CSTomorrow2Time>오후</CSTomorrow2Time>
            <CSTomorrow2Profile></CSTomorrow2Profile>
            <CSTomorrow2People>정빈</CSTomorrow2People>
          </CSTomorrow2>
        </CSTomorrowBottom>
      </CSHoliday>
    </BoardRightCS>
  );
};

export default CS;
