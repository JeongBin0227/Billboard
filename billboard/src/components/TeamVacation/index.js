import styled from 'styled-components';

const BoardRightTeamVacation = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
  width: 522px;
  height: 286px;
  overflow-y: initial;
`;

const TeamVacationTitle = styled.div`
  display: flex;
  padding: 30px 0px 27px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222f3c;
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
  margin-left: 3px;
`;

const TeamVacationNameTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid #222f3c;
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 5px;
`;

const TeamVacationPeople = styled.div``;

const Test = styled.div`
  width: 100%;
  height: 12px;
  display: flex;
  justifycontent: 'space-around';
`;
const Test1 = styled.div`
  width: 10%;
  height: 12px;
  border-radius: 30px;
`;
const Test2 = styled.div`
  width: 30%;
  height: 12px;
  border: 1px solid bisque;
`;
const Test3 = styled.div`
  width: 20%;
  height: 12px;
  background-color: #e7e7e7;
  border-radius: 30px;
`;
const Test4 = styled.div`
  width: 40%;
  height: 12px;
  border: 1px solid greenyellow;
`;
const Test5 = styled.div`
  width: 10%;
  border: 1px solid blue;
`;
const Test6 = styled.div`
  width: 30%;
  border: 1px solid bisque;
  background-color: #c1c7ff;
  border-radius: 30px;
`;
const Test7 = styled.div`
  width: 20%;
  border: 1px solid gray;
`;
const Test8 = styled.div`
  width: 40%;
  border: 1px solid greenyellow;
  background-color: #c1c7ff;
  border-radius: 30px;
`;
const Test9 = styled.div`
  width: 100%;
  border: 1px solid greenyellow;
  background-color: #8591ff;
  border-radius: 30px;
`;

const vacations = [
  {
    userId: '김정빈',
    startDate: '2021-06-01 09:00',
    endDate: '2021-06-01 18:00',
    hour: 8,
  },
  {
    userId: '김웅재',
    startDate: '2021-06-01 09:00',
    endDate: '2021-06-01 13:00',
    hour: 2,
  },
  {
    userId: '오태경',
    startDate: '2021-06-01 09:00',
    endDate: '2021-06-01 18:00',
    hour: 7,
  },
  {
    userId: '양나래',
    startDate: '2021-06-01 09:00',
    endDate: '2021-06-01 18:00',
    hour: 7,
  },
];

const index = () => {
  return (
    <BoardRightTeamVacation>
      <TeamVacationTitle>
        <TeamVacationToday>오늘</TeamVacationToday>
        <TeamVacationName>
          <TeamVacationNameList></TeamVacationNameList>식스샵3팀
          <TeamVacationNameTriangle></TeamVacationNameTriangle>
        </TeamVacationName>
        <TeamVacationPeople>휴가자 💤</TeamVacationPeople>
      </TeamVacationTitle>
      <section style={{ height: '190px', overflowY: 'auto' }}>
        <div style={{ padding: '0 40px 20px 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '13% 87%',
            }}
          >
            <div></div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  '36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px',
              }}
            >
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
            </div>
          </div>
          {/* {vacations.map((vacation, index) => ( */}
          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '13% 87%',
              alignItems: 'center',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                width: '46px',
                color: '#667381',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '18px',
              }}
            >
              김정빈
            </div>
            <div style={{}}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    '36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px',
                }}
              >
                {/* <Test2 class="test2" />
                  <Test3 class="test3" />
                  <Test4 class="test4" /> */}
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '115%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          {/*  */}

          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '13% 87%',
              alignItems: 'center',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                width: '46px',
                color: '#667381',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '18px',
              }}
            >
              오태경
            </div>
            <div style={{}}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    '36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px',
                }}
              >
                {/* <Test2 class="test2" />
                  <Test3 class="test3" />
                  <Test4 class="test4" /> */}
                <div></div>
                <div
                  style={{
                    margin: '0 0 0 5px',
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '120%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          {/*  */}

          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '13% 87%',
              alignItems: 'center',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                width: '46px',
                color: '#667381',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '18px',
              }}
            >
              김웅재
            </div>
            <div style={{}}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    '36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px',
                }}
              >
                {/* <Test2 class="test2" />
                  <Test3 class="test3" />
                  <Test4 class="test4" /> */}
                <div></div>
                <div></div>
                <div
                  style={{
                    margin: '0 0 0 10px',
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '120%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          {/*  */}

          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '13% 87%',
              alignItems: 'center',
              margin: '10px 0',
            }}
          >
            <div
              style={{
                width: '46px',
                color: '#667381',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '18px',
              }}
            >
              양나래
            </div>
            <div style={{}}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    '36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px 36.5px',
                }}
              >
                {/* <Test2 class="test2" />
                  <Test3 class="test3" />
                  <Test4 class="test4" /> */}
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#e7e7e7',
                    height: '12px',
                    width: '150%',
                    borderRadius: '27px',
                  }}
                ></div>
                <div></div>
              </div>
            </div>
          </div>

          {/*  */}

          {/* // ))} */}
          {/* <ul class="vacation-lists">
      {#each vacations as vacation}
        <VacationListComponent {vacation} />
      {/each}
    </ul> */}
        </div>
      </section>
    </BoardRightTeamVacation>
  );
};

export default index;
