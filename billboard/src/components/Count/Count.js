import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../recoil/count';

function Count() {
  const [count, setCount] = useRecoilState(countState);
  const [evenCount, setEvenCount] = useRecoilState(countEvenState);
  const incrementByOne = () => setCount(count + 1);
  const incrementByOneEvenCount = () => setEvenCount(count + 1);

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={incrementByOne}>Increment</button>
      <br />
      Even Count: {evenCount ? '짝수' : '홀수'}
      <br />
      <button onClick={incrementByOneEvenCount}>Even Increment</button>
    </div>
  );
}

export default Count;
