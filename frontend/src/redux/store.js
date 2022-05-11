import { combineReducers, createStore } from "redux";
import studentReducer from "./reducers/studentReducer";
import teacherReducer from "./reducers/teacherReducer"

export const store = createStore(combineReducers({
    student: studentReducer,
    teacher: teacherReducer
}))