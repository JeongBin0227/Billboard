import styled from 'styled-components';

const BoardRightShortcuts = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 521px;
  height: 398px;
`;

const ShortcutsTitle = styled.div`
  padding: 30px 0 20px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222f3c;
`;

const ShortcutsTable = styled.div`
  margin: 0 30px 40px 30px;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 30px;
  font-size: 20px;
  font-weight: 400;
  color: #667381;
`;

const Link = styled.a`
  margin-bottom: 15px;
  text-decoration: none;
  color: #667381;
`;

const index = () => {
  return (
    <BoardRightShortcuts>
      <ShortcutsTitle>λ°λ‘κ°κΈ° π</ShortcutsTitle>
      <ShortcutsTable>
        <Link href="https://www.sixshop.com/" target="_blank">
          π μμ€μ΅ ννμ΄μ§
        </Link>
        <Link href="https://help.sixshop.com/" target="_blank">
          π μμ€μ΅ κ³ κ°μΌν°
        </Link>
        <Link href="https://www.atlassian.com/ko/software/jira" target="_blank">
          π μ§λΌ
        </Link>
        <Link href="https://admin.sixshop.com/login" target="_blank">
          π μ΄λλ―Ό
        </Link>
        <Link href="https://channel.io/" target="_blank">
          π μ±λν‘
        </Link>
        <Link href="https://www.figma.com/" target="_blank">
          π νΌκ·Έλ§
        </Link>
        <Link href="https://flex.team/" target="_blank">
          π flex
        </Link>
        <Link
          href="https://docs.google.com/spreadsheets/d/1ZJ8YGT1YaqMpLr-2JU1IjXKqS_VXO3e62SlZgcr27UM/edit#gid=1525930298"
          target="_blank"
        >
          π κ³μ μ λ³΄
        </Link>
        <Link
          href="https://docs.google.com/spreadsheets/d/18blkUm0JEAHCFWLutoSde-d0pMje-iIXJ72Iv5FFZ4Q/edit#gid=1895131532"
          target="_blank"
        >
          π CS μΌμ 
        </Link>
      </ShortcutsTable>
    </BoardRightShortcuts>
  );
};

export default index;
