import React from 'react'
import CircleCheckbox from '../CircleCheckbox/CircleCheckbox'
import './Todo.css'
import {useSelector, useDispatch} from 'react-redux'

function Todo({id ,content = 'Create Something', completed = false, onDragStart, onDragEnd, onDragEnter, removeTodo, updateStatus}) {


  return (
    <article className={`Todo themed-container ${completed && 'completed'}`}
    draggable
    onDragStart={onDragStart}
    onDragEnter={onDragEnter}
    onDragEnd={onDragEnd}
    >
        <div className="Todo__left">
         <CircleCheckbox checked={completed} onCheck={updateStatus} />
         <p className="Todo__text">{content}</p>
        </div>
        <img src="images/icon-cross.svg" alt="" className="Todo__delete" onClick={removeTodo}/>
    </article>
  )
}

export default Todo