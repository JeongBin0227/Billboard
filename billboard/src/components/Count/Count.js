import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../recoil/count';

function Count() {
  const [count, setCount] = useRecoilState(countState);
  const incrementByOne = () => setCount(count + 1);

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={incrementByOne}>Increment</button>
    </div>
  );
}

export default Count;
