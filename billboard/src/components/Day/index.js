import styled from 'styled-components';

const BoardLeftDay = styled.div`
  width: 966px;
  height: 255px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;
const BoardLeftDayTop = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  margin: 30px 17px 0px 30px;
`;

const BoardLeftDayDate = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222f3c;
  margin-right: 17px;
`;

const BoardLeftDaySprint = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  color: #222f3c;
  margin-top: 5px;
`;

const BoardLeftDayMiddle = styled.div`
  display: flex;
  margin: 17px auto 39px 30px;
`;

const BoardLeftDayIssue = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #222f3c;
  margin-right: 6px;
`;

const BoardLeftDayIssueNumber = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #7b7be5;
  width: 20px;
  height: 21px;
  left: 199px;
  top: 274px;
  background-color: #eeeeff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoardLeftDayBottom = styled.div`
  margin: 0 30px 36px 30px;
`;

const BoardLeftDayPeople = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardLeftDayBottomBubble = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardLeftDayBottomBubbleBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #7b7be5;
  width: 131px;
  height: 30px;
  background: #eeeeff;
  border-radius: 6px;
`;

const BoardLeftDayBottomBubbleTriangle = styled.span`
  width: 0px;
  height: 0px;
  border-right: 13px solid #eeeeff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-radius: 3px;
  transform: rotate(-90deg);
  margin-top: -4px;
`;

const BoardLeftDayBottomImoji = styled.span`
  font-size: 40px;
  transform: scaleX(-1);
`;

const BoardLeftDayBottomLine = styled.div`
  width: 906px;
  height: 8px;
  background: #eeeeff;
  border-radius: 20px;
  margin-top: -15px;
`;
const index = () => {
  return (
    <BoardLeftDay>
      <BoardLeftDayTop>
        <BoardLeftDayDate>10월 28일 MON</BoardLeftDayDate>
        <BoardLeftDaySprint>96 Sprint</BoardLeftDaySprint>
      </BoardLeftDayTop>
      <BoardLeftDayMiddle>
        <BoardLeftDayIssue>이번주 사내소식</BoardLeftDayIssue>
        <BoardLeftDayIssueNumber>3</BoardLeftDayIssueNumber>
      </BoardLeftDayMiddle>
      <BoardLeftDayBottom>
        <BoardLeftDayPeople>
          <BoardLeftDayBottomBubble></BoardLeftDayBottomBubble>
          <BoardLeftDayBottomBubbleBox>
            다들 일어나세요
          </BoardLeftDayBottomBubbleBox>
          <BoardLeftDayBottomBubbleTriangle></BoardLeftDayBottomBubbleTriangle>
          <BoardLeftDayBottomImoji>🏃‍♀️</BoardLeftDayBottomImoji>
        </BoardLeftDayPeople>

        <BoardLeftDayBottomLine>
          <div
            style={{
              backgroundColor: '#7B7BE5',
              height: '100%',
              width: '53%',
              borderRadius: '20px',
            }}
          ></div>
        </BoardLeftDayBottomLine>
      </BoardLeftDayBottom>
    </BoardLeftDay>
  );
};

export default index;
