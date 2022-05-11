import { SET_TEACHERS_TASKS, GET_TEACHERS_HOMEWORKS_FAILED, SET_TEACHERS_HOMEWORKS, GET_TEACHERS_TASKS_FAILED, TEACHERS_APPEND_TASK, TEACHERS_APPEND_TASK_FAILED } from "../ActionTypes"
    
    
const initialState = {
    studentAttempts: [],
    gotStudentAttempts: false,
    tasks: [],
    gotTasks: false
}
    
export default function teacherReducer(state = initialState, action){
    switch(action.type){
        case SET_TEACHERS_TASKS:
            console.log({
                ...state,
                tasks: action.payload,
                gotTasks: true
            })
            return {
                ...state,
                tasks: action.payload,
                gotTasks: true
            }
        case SET_TEACHERS_HOMEWORKS:
            return {
                ...state,
                studentAttempts: action.payload,
                gotStudentAttempts: true
            }
        case GET_TEACHERS_TASKS_FAILED:
            return state
        case GET_TEACHERS_HOMEWORKS_FAILED:
            return state
        case TEACHERS_APPEND_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([action.payload])
            }
        case TEACHERS_APPEND_TASK_FAILED:
            return state
        default:
            return state
    }
}