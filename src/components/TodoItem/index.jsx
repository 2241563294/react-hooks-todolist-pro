import React from 'react';
import "./index.scss";

export default function TodoList(props) {

  const { data, openModel, handleCompleted, removeItem } = props;

  const changeHandle = () => handleCompleted(data.id);

  return (
    <li className="todo_item">
      <div className="checkbox">
        <input type="checkbox" checked={data.completed} onChange={changeHandle} />
      </div>
      <span className="content" 
      style={{textDecoration: data.completed ? 'line-through' : 'none'}} 
      >{data.content}</span>
      <div className="btn_group">
       <button onClick={() => openModel(data.id)} className="myBtn add_type">查看</button>
       <button onClick={() => openModel(data.id, 1)} className="myBtn edit_type">编辑</button>
       <button onClick={() => removeItem(data.id)} className="myBtn remove_type">删除</button>
      </div>
    </li>
  )
}

