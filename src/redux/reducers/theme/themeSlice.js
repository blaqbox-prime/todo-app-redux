import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        switchColor: (state, action) => {
            switch(state){
                case "light": return "dark";
                case "dark": return "light";
            }
        }
    }
});

export const { switchColor } = themeSlice.actions;
export default themeSlice.reducer;
