import { combineReducers } from "redux";
import todosReducer from "./todos/todosSlice"
import themeReducer from './theme/themeSlice'

const rootReducer = combineReducers({
    todos: todosReducer,
    theme: themeReducer
})

export default rootReducer; 