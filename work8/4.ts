import React, { useState } from 'react';  
  
// 定义元组类型，表示状态和更新状态的函数  
type StateTuple<T> = [T, (value: T) => void];  
  
// 创建一个使用元组的useState钩子  
function useStateTuple<T>(initialValue: T): StateTuple<T> {  
  const [state, setState] = useState<T>(initialValue);  
  const setStateTuple = (value: T) => setState(value);  
  return [state, setStateTuple];  
}  
  
function CounterComponent() {  
  // 使用自定义的useStateTuple钩子  
  const [count, setCount] = useStateTuple(0);  
  
  const handleClick = () => {  
    setCount(count + 1);  
  };  
  
  return (  
    <div>  
      <p>Count: {count}</p>  
      <button onClick={handleClick}>Increment</button>  
    </div>  
  );  
}