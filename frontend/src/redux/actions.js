import { SET_STUDENTS_TASKS, GET_STUDENTS_TASKS_FAILED, SET_STUDENTS_ATTEMPTS, GET_STUDENTS_ATTEMPTS_FAILED } from './ActionTypes'

export const setStudentsTasksAction = (payload) => {
    return {
        type: SET_STUDENTS_TASKS,
        payload: payload
    }
}

export const getStudentsTasksFailedAction = (payload) => {
    return {
        type: GET_STUDENTS_TASKS_FAILED,
        payload: payload
    }
}

export const setStudentsAttemptsAction = (payload) => {
    return {
        type: SET_STUDENTS_ATTEMPTS,
        payload: payload
    }
}

export const getStudentsAttemptsFailedAction = (payload) => {
    return {
        type: GET_STUDENTS_ATTEMPTS_FAILED,
        payload: payload
    }
}