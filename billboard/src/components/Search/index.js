import styled from 'styled-components';
import search from '../../../src/img/ico-search-line-big.svg';

const BoardLeftSearch = styled.div`
  width: 966px;
  height: 78px;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  display: flex;
`;
const SearchImg = styled.img`
  padding: 27px 16px 27px 30px;
`;

const SearchText = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #bfbfcc;
  padding-top: 27px;
`;

const index = () => {
  return (
    <BoardLeftSearch>
      <SearchImg src={search} />
      <SearchText>구글에서 검색</SearchText>
    </BoardLeftSearch>
  );
};

export default index;
