import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Todo from '../Todo/Todo';
import CircleCheckbox from '../CircleCheckbox/CircleCheckbox';
import './TodoList.css'
import {switchColor} from '../../redux/reducers/theme/themeSlice'
import {reorder, updateStatus, remove, create, clearCompleted} from '../../redux/reducers/todos/todosSlice'
import { v4 as uuidv4 } from 'uuid';

function TodoList() {

  // const [items,setItems] = useState([])
  const filters = {active: 'active', all: 'all', completed: 'completed'};
  Object.freeze(filters);

  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input,setInput] = useState('');
  const [activeFilter, setFilter] = useState(filters.all);


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create({
      id: uuidv4(),
      content: input,
      completed: false,
    }));
    setInput('');
  }


  // Drag & Drop Functionality
  const dragItem = useRef();
  const dragOverItem = useRef();

  const onDragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  }

  const onDragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML); 
  }

  const drop = () => {
    dispatch(reorder({
      dragItem: dragItem.current,
      dragOverItem: dragOverItem.current
    }));
    dragItem.current = null;
    dragOverItem.current = null;
 
  }


  return (
    <div className='TodoList'>
        <div className="TodoList__header">
            <h1>Todo</h1>
            <img src={theme === 'light' ? "images/icon-moon.svg" : "images/icon-sun.svg"} alt="" className="TodoList__theme" onClick={() => dispatch(switchColor())}/>
        </div>
        {/* Input */}
        <form className="TodoList__form themed-container" onSubmit={handleSubmit} >
          <CircleCheckbox />
          <input className="themed-container" type="text" value={input} onChange={handleChange} required placeholder='Add somthing to do'/>
        </form>

        <section className="TodosList__list themed-container" >

          {todos.map((todo, index) => {
            switch(activeFilter){
              case 'all' : 
              return <Todo key={index} id={todo.id} content={todo.content} completed={todo.completed} onDragStart={(e) => onDragStart(e,index)}
              onDragEnter={(e) => onDragEnter(e,index)}
              onDragEnd={drop}
              removeTodo={() => {dispatch(remove(todo.id))}}
              updateStatus={() => {dispatch(updateStatus(todo))}}
              />
              case 'active' : 
                if(todo.completed !== true){
                  return <Todo key={index} id={todo.id} content={todo.content} completed={todo.completed} onDragStart={(e) => onDragStart(e,index)}
                  onDragEnter={(e) => onDragEnter(e,index)}
                  onDragEnd={drop}
                  removeTodo={() => {dispatch(remove(todo.id))}}
                  updateStatus={() => {dispatch(updateStatus(todo))}}
                  />
                }
              break;
              case 'completed' : 
                if(todo.completed === true){
                  return <Todo key={index} id={todo.id} content={todo.content} completed={todo.completed} onDragStart={(e) => onDragStart(e,index)}
                  onDragEnter={(e) => onDragEnter(e,index)}
                  onDragEnd={drop}
                  removeTodo={() => {dispatch(remove(todo.id))}}
                  updateStatus={() => {dispatch(updateStatus(todo))}}
                  />
                }
              break;
              default: return;
            }
            
          })}

          <footer className="themed-container TodosList__footer" >
            <p className="TodoList__remaining">{todos.filter(todo => todo.completed === false).length} items left</p>
            <div className="TodoList__filters">
              <button className={`text-button ${activeFilter === 'all' && 'active'}`} onClick={()=>{setFilter(filters.all)}}>All</button>
              <button className={`text-button ${activeFilter === 'active' && 'active'}`} onClick={()=>{setFilter(filters.active)}}>Active</button>
              <button className={`text-button ${activeFilter === 'completed' && 'active'}`} onClick={()=>{setFilter(filters.completed)}}>Completed</button>
            </div>
            <button className="text-button" onClick={() => dispatch(clearCompleted())}>Clear completed</button>
          </footer>
        </section>
        <p className="TodoList__tip">Drag and drop to reorder list</p>
    </div>
  )
}

export default TodoList