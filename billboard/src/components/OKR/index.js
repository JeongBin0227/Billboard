import styled from 'styled-components';

const BoardLeftOKR = styled.div`
  width: 967px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;

const OKRTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222F3C;
  display: inline-block;
  padding: 30px 0 12px 30px;
`;

const index = () => {
  return <BoardLeftOKR>
    <OKRTitle>
      식스샵의 OKR👊
    </OKRTitle>
  </BoardLeftOKR>;
};

export default index;
