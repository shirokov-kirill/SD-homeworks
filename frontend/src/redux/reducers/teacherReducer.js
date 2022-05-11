import { GET_TEACHERS_TASKS, GET_TEACHERS_STUDENTATTEMPTS } from "../ActionTypes"
    
    
const initialState = {
    studentAttempts: [],
    tasks: [],
    studentAttemptsStatus: '',
    tasksStatus: '',
}
    
export default function teacherReducer(state = initialState, action){
    switch(action.type){
        case GET_TEACHERS_TASKS:
            return state
        case GET_TEACHERS_STUDENTATTEMPTS:
            return state
        default:
            return state
    }
}