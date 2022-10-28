import React from 'react';
import './index.scss';

export default function Model(props) {

  const { isShowModel, modelTitle, children } = props; 
  return (<>
  {
    !isShowModel ? '' : (
    <div className="model">
      <div className="model_inner">
        <div className="model_title">{modelTitle}</div>
        <div className="model_content">
          {children}
        </div>
      </div>  
    </div>
    )
  }
  </>)
}
