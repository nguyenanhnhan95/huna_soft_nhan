import { createSlice } from "@reduxjs/toolkit"

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
      addEmployee(state, action) {
        console.log(action)
        state.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        })
        console.log(state)
      }
    },
  })
  
  export const { addEmployee } = employeeSlice.actions
  export default employeeSlice.reducer