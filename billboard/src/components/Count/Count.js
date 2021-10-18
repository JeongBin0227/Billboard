import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../recoil/count';

function Count() {
  const [count, setCount] = useRecoilState(countState);
  const [evenCount, setEvenCount] = useRecoilState(countEvenState);
  const incrementByOne = () => setCount(count + 1);
  const incrementByOneEvenCount = () => setEvenCount(count + 1);
  const resetCount = useResetRecoilState(countState);

  //   useRecoilValue: 값만을 불러올 수 있다. 즉 이 훅은 set 함수를 반환하지 않는다.
  // useSetRecoilState: set 함수만을 불러올 수 있다.
  // useRecoilState: 값, set 함수 두가지 다 불러올 수 있다.
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={incrementByOne}>Increment</button>
      <br />
      Even Count: {evenCount ? '짝수' : '홀수'}
      <br />
      <button onClick={incrementByOneEvenCount}>Even Increment</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default Count;
