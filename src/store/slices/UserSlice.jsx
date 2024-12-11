import {createSlice} from "@reduxjs/toolkit";
import { clearAllUsers} from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action){
            let userIndex = state.indexOf(action.payload);
            state.splice(userIndex, 1);

            //  Another  way to removeUser is, pass the id directly instead of user in DisplayUser 
            // delete button then,
            // state.splice(action.payload, 1);  
        },
        // removeAllUsers(state, action){},
    },

    extraReducers(builder){
        builder.addCase(clearAllUsers, () => {
            return [];
        })
    }
});

// console.log(userSlice.actions);

export {userSlice};
export const {addUser, removeUser} = userSlice.actions ;