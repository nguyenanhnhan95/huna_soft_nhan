import { FETCH_EMPLOYEES_FAILED,FETCH_EMPLOYEES_START,FETCH_EMPLOYEES_SUCCEEDED } from "../constants/employee";
const initialState = {
    status:'uninitialized',
    employees:[],
    error:null,
}
export default function employeesReducer(state=initialState,action){
    switch(action.type){
        case FETCH_EMPLOYEES_START:{
            return{
                ...state,
                status:'loading'
            }
        }
        case FETCH_EMPLOYEES_SUCCEEDED:{
            return {
                ...state,
                status:'succeeded',
                employees:action.employees
            }
        }
        case FETCH_EMPLOYEES_FAILED:{
            return{
                ...state,
                status:'failed',
                employees:[],
                error:action.error
            }
        }
        default:
            return state;

    }
}