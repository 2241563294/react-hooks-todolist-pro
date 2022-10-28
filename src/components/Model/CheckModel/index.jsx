import React from 'react';
import "./index.scss";

import Model from '../'

export default function CheckModel(props) {

  const { isShowCheckModel, data, closeModel } = props;

  return (
    <Model isShowModel={isShowCheckModel} modelTitle='查看事件'>
      <p>时间：{new Date(data.id).toLocaleDateString()}</p>
      <p>内容：{data?.content}</p>
      <p>状态：{data?.completed ? '已完成' : '未完成'}</p>
      <button className="myBtn add_type" 
      style={{width: '3rem',margin:'0.7rem auto 0', height: '0.7rem', display: 'block'}} 
      onClick={closeModel}>确定</button>
    </Model>
  )
}
