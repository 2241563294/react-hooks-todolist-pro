import React, { useRef } from 'react';
import "./index.scss";

import Model from "../";

export default function EditModel(props) {

  const { isShowEditModel, data, updateData, handleCompleted } = props;
  const textareaRef = useRef();
  const formatData = () => {
    const val = textareaRef.current.value.trim();
    if (!val.length) return textareaRef.current.value =  data.content;
    const newData = {
      id: new Date().getTime(),
      content: textareaRef.current.value,
      completed: data.completed
    }
    // 传原本的id
    updateData(newData, data.id);
  }

  return (
    <Model isShowModel={isShowEditModel} modelTitle='编辑事件'>
      <p>时间：{new Date(data.id).toLocaleDateString()}</p>
      <p>
        <textarea className="textarea" ref={textareaRef} defaultValue={data.content} />
      </p>
      <p>状态：
        <input type="checkbox" onChange={() => handleCompleted(data.id)} checked={data.completed} />
      </p>
      <button className="myBtn edit_type" 
      style={{width: '3rem',margin:'0.7rem auto 0', height: '0.7rem', display: 'block'}} 
      onClick={formatData}>确定</button>
    </Model>
  )
}
