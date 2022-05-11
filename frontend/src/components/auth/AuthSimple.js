import { Navigate, Route, Routes } from "react-router-dom";
import AuthSimpleView from "./AuthSimpleView";
import Teacher from "../teacher/Teacher";
import Student from "../student/Student";
import "./AuthSimple.css"

export default function AuthSimple() {
    return (
        <div className="fullscreen">
            <div id="background">
                <img className="stretch" src="/assets/images/bg.jpg" alt="Фотка"/>
            </div>
            <div id="background-shader"/>
            <Routes>
                <Route path="/teacher" element={<Teacher/>}>
                </Route>
                <Route path="/student/*" element={<Student/>}>
                </Route>
                <Route path="/auth" element={<AuthSimpleView/>}/>
                <Route path="*" element={<Navigate to="/auth" replace={true}/>}/>
            </Routes>
        </div>
    )
}