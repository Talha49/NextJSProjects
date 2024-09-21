import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'


export const fecthTasks = createAsyncThunk('Tasks/GetTask', async () => {


    const res =  await fetch('/api/Tasks/GetTask');
    if(res.ok){
        const data = await res.json()
        return data
    }
    else {
        throw new Error('Failed to fetch Data')
    }
} )

export const CreateTasks = createAsyncThunk('Tasks/CreateTask', async (taskData) => {
    const res = await fetch('/api/Tasks/CreateTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body:JSON.stringify({...taskData,id:uuidv4() } )
    })
    if(res.ok){
        const data = await res.json()
        return data.task;
    }
    else{
        throw new Error('Failed to post Task')
    }

} )



const initialState = {
    tasks:[],
    selectedTask:'',
    status: 'idle',
    error: null    
}


const userSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder
        .addCase(fecthTasks.pending, (state) =>{
            state.status = 'loading'
        })
        .addCase(fecthTasks.fulfilled, (state, action)=> {
            state.status = 'succeeded',
            state.tasks = action.payload
        })
        .addCase(fecthTasks.rejected, (state,action) => {
            state.status = 'failed',
            state.error = action.error.message;
        })
        .addCase(CreateTasks.fulfilled, (state, action) => {

            state.tasks.push(action.payload)
        })
    }
        
    
})


export const {addTask} = userSlice.actions;
export default userSlice.reducer