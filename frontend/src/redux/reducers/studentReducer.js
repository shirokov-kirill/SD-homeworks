import {
    GET_STUDENTS_ATTEMPTS_FAILED,
    GET_STUDENTS_TASKS_FAILED,
    SET_STUDENTS_ATTEMPTS,
    SET_STUDENTS_TASKS,
    STUDENTS_APPEND_ATTEMPT, STUDENTS_APPEND_ATTEMPT_FAILED
} from "../ActionTypes"

const initialState = {
    attempts: [],
    gotAttempts: false,
    tasks: [],
    gotTasks: false
}

export default function studentReducer(state = initialState, action) {
    switch(action.type){
        case SET_STUDENTS_ATTEMPTS:
            return {
                ...state,
                gotAttempts: true,
                attempts: action.payload
            }
        case GET_STUDENTS_ATTEMPTS_FAILED:
            return state
        case SET_STUDENTS_TASKS:
            return {
                ...state,
                gotTasks: true,
                tasks: action.payload
            }
        case GET_STUDENTS_TASKS_FAILED:
            return state
        case STUDENTS_APPEND_ATTEMPT:
            return {
                ...state,
                attempts: state.attempts.concat([action.payload])
            }
        case STUDENTS_APPEND_ATTEMPT_FAILED:
            return state
        default:
            return state
    }
}