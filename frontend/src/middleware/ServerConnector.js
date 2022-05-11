import axios, { Axios } from "axios"
import { getStudentsAttemptsFailedAction, getStudentsTasksFailedAction, setStudentsAttemptsAction, setStudentsTasksAction } from "../redux/actions"


export const getStudentsListOfAttempts = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/student/attempts')
        const attempts = JSON.parse(response)
        setStudentsAttemptsAction(attempts)
    } catch(error) {
        getStudentsAttemptsFailedAction(error.message)
    }
}

export const getStudentsListOfTasks = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/student/tasks')
        const tasks = JSON.parse(response)
        setStudentsTasksAction(tasks)
    } catch (error) {
        getStudentsTasksFailedAction(error.message)
    }
}

export const sumbitAttempt = (attempt, callback) => {
    axios.post('http://127.0.0.1:8080/student/attempts', {
        attempt: attempt
    }).then(response => {
        //TODO
        callback()
    })
}