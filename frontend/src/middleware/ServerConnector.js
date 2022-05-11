import axios from "axios"
import { getStudentsAttemptsFailedAction, getStudentsTasksFailedAction, getTeachersHomeworksFailedAction, getTeachersTasksFailedAction, setStudentsAttemptsAction, setStudentsTasksAction, setTeachersHomeworksAction, setTeachersTasksAction, teachersAppendTask, teachersAppendTaskFailedAction } from "../redux/actions"
import {Component} from "react";
import {store} from "../redux/store";

export default class ServerConnector extends Component{

    static getStudentsListOfAttempts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/student/attempts')
            const attempts = response.data
            store.dispatch(setStudentsAttemptsAction(attempts))
        } catch(error) {
            store.dispatch(getStudentsAttemptsFailedAction(error.message))
        }
    }

    static getStudentsListOfTasks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/student/tasks')
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
            const response = await axios.get('http://127.0.0.1:8080/teacher/homeworks')
            const homeworks = response.data
            store.dispatch(setTeachersHomeworksAction(homeworks))
        } catch(error){
            store.dispatch(getTeachersHomeworksFailedAction(error.message))
        }
    }

    static getTeachersListOfTasks = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8080/teacher/tasks')
            const tasks = response.data
            store.dispatch(setTeachersTasksAction(tasks))
        } catch(error) {
            store.dispatch(getTeachersTasksFailedAction(error.message))
        }
    }

    static appendTask = async (task) => {
        try{
            const response = await axios.post('http://127.0.0.1:8080/teacher/addtask', {...task})
            if(response.status === 200){
                store.dispatch(teachersAppendTask(task))
            } else {
                console.log(response.status)
            }
        } catch(error) {
            store.dispatch(teachersAppendTaskFailedAction(error.message))
        }
    }

    static sumbitAttempt = (attempt, callback) => {
        axios.post('http://127.0.0.1:8080/student/attempts', {...attempt})
            .then(response => {
                //TODO
                callback()
            })
    }

}