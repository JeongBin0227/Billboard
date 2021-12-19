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

const CSHoliday = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 206px;
  height: 255px;
`;

const index = () => {
  return (
    <BoardRightCS>
      <CSTomorrow>내일</CSTomorrow>
      <CSHoliday>휴일</CSHoliday>
    </BoardRightCS>
  );
};

export default index;
