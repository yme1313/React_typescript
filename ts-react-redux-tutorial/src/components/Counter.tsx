import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
  onDecreaseBy: (diff: number) => void;
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
  onDecreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={() => onDecreaseBy(5)}>-5</button>
    </div>
  );
}

export default Counter;