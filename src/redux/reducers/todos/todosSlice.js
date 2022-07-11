import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: [{id:123, content: 'item 1', completed: true},{id:456, content: 'item 2', completed: false},{id:789, content: 'item 3', completed: false}],
    reducers: {
        create : (state, action) => {
            state.push(action.payload);
        },
        remove : (state, action) => {
            return state.filter(todo => todo.id !== action.payload); 
        },
        updateStatus : (state, action) => {
          let idx = state.findIndex(todo => todo.id === action.payload.id);
          if(action.payload.completed === true){
            state[idx].completed = false
            }else{
                state[idx].completed = true;
          }
        },
        clearCompleted: (state, action) => {
            return state.filter(todo => todo.completed === false)
        },

        reorder: (state, action) => {
            const copyListItems = [...state];
            const dragItemContent = copyListItems[action.payload.dragItem];
            copyListItems.splice(action.payload.dragItem, 1);
            copyListItems.splice(action.payload.dragOverItem, 0, dragItemContent);
            return copyListItems;
        }
    }
})


export const {create, updateStatus, clearCompleted, remove, reorder} = todosSlice.actions;
export default todosSlice.reducer;

