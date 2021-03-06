import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState } from '../../recoil/count';
import {
  csSelector,
  eventsSelector,
  vacationsSelector,
  healthSelector,
  weatherSelector,
} from '../../recoil/data';

const Count = () => {
  // const [count, setCount] = useRecoilState(countState);
  // const [evenCount, setEvenCount] = usscountEvenState);
  // const incrementByOne = () => setCount(count + 1);
  // const incrementByOneEvenCount = () => setEvenCount(count + 1);
  // const resetCount = useResetRecoilState(countState);
  const user1 = useRecoilValue(csSelector);
  const user2 = useRecoilValue(eventsSelector);
  const user3 = useRecoilValue(vacationsSelector);
  const user4 = useRecoilValue(healthSelector);
  const user5 = useRecoilValue(weatherSelector);
  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
  console.log(user5);
  //   useRecoilValue: 값만을 불러올 수 있다. 즉 이 훅은 set 함수를 반환하지 않는다.
  // useSetRecoilState: set 함수만을 불러올 수 있다.
  // useRecoilState: 값, set 함수 두가지 다 불러올 수 있다.
  return <></>;
};
// <div>
//   Count: {count}
//   <br />
//   <button onClick={incrementByOne}>Increment</button>
//   <br />
//   Even Count: {evenCount ? '짝수' : '홀수'}
//   Test
//   <br />
//   <button onClick={incrementByOneEvenCount}>Even Increment</button>
//   <button onClick={resetCount}>reset</button>
// </div>
// );
// }

export default Count;
