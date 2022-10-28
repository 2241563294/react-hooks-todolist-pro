import React, { useRef } from 'react';
import "./index.scss";

export default function AddInput(props) {

  const { isShowInput, addItem } = props;
  const inputRef = useRef();

  const submitValue = () => {
    const { value } = inputRef.current;
    if (!value?.trim()) return; 
    addItem && addItem(value);
    inputRef.current.value = '';
  }

  return (<>
    {
      isShowInput ? 
      (
        <div className="add_input">
          <input ref={inputRef} type="text" placeholder="请输入待办事件" />
          <button className="myBtn add_type" onClick={ submitValue }>添加</button>  
        </div>
      ) : ''
    }
  </>)
}

