import {
    SET_STUDENTS_TASKS,
    GET_STUDENTS_TASKS_FAILED,
    SET_STUDENTS_ATTEMPTS,
    GET_STUDENTS_ATTEMPTS_FAILED,
    SET_TEACHERS_TASKS,
    GET_TEACHERS_TASKS_FAILED,
    SET_TEACHERS_HOMEWORKS,
    GET_TEACHERS_HOMEWORKS_FAILED,
    TEACHERS_APPEND_TASK,
    TEACHERS_APPEND_TASK_FAILED,
    STUDENTS_APPEND_ATTEMPT, STUDENTS_APPEND_ATTEMPT_FAILED
} from './ActionTypes'

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

export const setTeachersTasksAction = (payload) => {
    return {
        type: SET_TEACHERS_TASKS,
        payload: payload
    }
}

export const getTeachersTasksFailedAction = (payload) => {
    return {
        type: GET_TEACHERS_TASKS_FAILED,
        payload: payload
    }
}

export const setTeachersHomeworksAction = (payload) => {
    return {
        type: SET_TEACHERS_HOMEWORKS,
        payload: payload
    }
}

export const getTeachersHomeworksFailedAction = (payload) => {
    return {
        type: GET_TEACHERS_HOMEWORKS_FAILED,
        payload: payload
    }
}

export const teachersAppendTask = (payload) => {
    return {
        type: TEACHERS_APPEND_TASK,
        payload: payload
    }
}

export const teachersAppendTaskFailedAction = (payload) => {
    return {
        type: TEACHERS_APPEND_TASK_FAILED,
        payload: payload
    }
}

export const studentAddAttempt = (payload) => {
    return {
        type: STUDENTS_APPEND_ATTEMPT,
        payload: payload
    }
}

export const studentAddAttemptFailedAction = (payload) => {
    return {
        type: STUDENTS_APPEND_ATTEMPT_FAILED,
        payload: payload
    }
}