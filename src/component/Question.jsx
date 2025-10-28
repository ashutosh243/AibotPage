import React from 'react'
import style from './Question.module.css';

const Question=({question})=> {
  
    return (<>
          <div className={style.container}>
            <h3>{question}</h3>
            <p>Get immediate Ai generated response</p>
          </div>
    
    </>);
}

export default Question