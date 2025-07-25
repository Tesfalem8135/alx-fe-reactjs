import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p style={{ fontSize: '1.5em', margin: '10px 0' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0 5px', padding: '8px 16px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 5px', padding: '8px 16px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 5px', padding: '8px 16px' }}>Reset</button>
    </div>
  );
}

export default Counter; 