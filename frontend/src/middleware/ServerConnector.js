import axios, { Axios } from "axios"
import { getStudentsAttemptsFailedAction, getStudentsTasksFailedAction, getTeachersHomeworksFailedAction, getTeachersTasksFailedAction, setStudentsAttemptsAction, setStudentsTasksAction, setTeachersHomeworksAction, setTeachersTasksAction, teachersAppendTask, teachersAppendTaskFailedAction } from "../redux/actions"


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

export const getTeachersListOfHomeworks = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:8080/teacher/homeworks')
        const homeworks = JSON.parse(response)
        setTeachersHomeworksAction(homeworks)
    } catch(error){
        getTeachersHomeworksFailedAction(error.message)
    }
}

export const getTeachersListOfTasks = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:8080/teacher/tasks')
        const tasks = JSON.parse(response)
        setTeachersTasksAction(tasks)
    } catch(error) {
        getTeachersTasksFailedAction(error.message)
    }
}

export const appendTask = async (task) => {
    try{
        const response = await axios.post('http://127.0.0.1:8080/teacher/addtask', {...task})
        if(response.status === 200){
            teachersAppendTask(task)
        } else {
            console.log(response.status)
        }
    } catch(error) {
        teachersAppendTaskFailedAction(error.message)
    }
}

export const sumbitAttempt = (attempt, callback) => {
    axios.post('http://127.0.0.1:8080/student/attempts', {...attempt})
    .then(response => {
        //TODO
        callback()
    })
}