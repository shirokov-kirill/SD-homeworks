import axios from "axios"
import {
    getStudentsAttemptsFailedAction,
    getStudentsTasksFailedAction,
    getTeachersHomeworksFailedAction,
    getTeachersTasksFailedAction,
    setStudentsAttemptsAction,
    setStudentsTasksAction,
    setTeachersHomeworksAction,
    setTeachersTasksAction,
    studentAddAttemptFailedAction,
    teachersAppendTaskFailedAction
} from "../redux/actions"
import {Component} from "react";
import {store} from "../redux/store";

export default class ServerConnector extends Component{

    static getStudentsListOfAttempts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/student/attempts')
            const attempts = response.data
            store.dispatch(setStudentsAttemptsAction(attempts))
        } catch(error) {
            store.dispatch(getStudentsAttemptsFailedAction(error.message))
        }
    }

    static getStudentsListOfTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/student/tasks')
            console.log(response)
            const tasks = response.data
            console.log(tasks)
            store.dispatch(setStudentsTasksAction(tasks))
        } catch (error) {
            store.dispatch(getStudentsTasksFailedAction(error.message))
        }
    }

    static getTeachersListOfHomeworks = async () => {
        try{
            const response = await axios.get('http://localhost:8080/teacher/homeworks')
            const homeworks = response.data
            store.dispatch(setTeachersHomeworksAction(homeworks))
        } catch(error){
            store.dispatch(getTeachersHomeworksFailedAction(error.message))
        }
    }

    static getTeachersListOfTasks = async () => {
        try{
            const response = await axios.get('http://localhost:8080/teacher/tasks')
            const tasks = response.data
            store.dispatch(setTeachersTasksAction(tasks))
        } catch(error) {
            store.dispatch(getTeachersTasksFailedAction(error.message))
        }
    }

    static appendTask = async (task) => {
        try{
            const response = await axios.post('http://localhost:8080/teacher/tasks', {...task})
            if(response.status !== 200){
                console.log(response.status)
            }
        } catch(error) {
            store.dispatch(teachersAppendTaskFailedAction(error.message))
        }
    }

    static submitAttempt = async (attempt, taskId) => {
        axios.post(`http://localhost:8080/student/attempts/${taskId}`, {...attempt})
            .then(response => {
                if(response.status !== 200){
                    alert("Failed to process your answer. Please check your internet connection and come back later.")
                    studentAddAttemptFailedAction(null)
                }
            })
    }

}