import React, { useEffect } from "react"
import ServerConnector from "../../middleware/ServerConnector"
import { useSelector } from "react-redux"
import './ListComponent.css'
import { gotTeacherHomeworks, teacherHomeworks } from "../../redux/selectors"
import RefreshPageButton from "../widgets/RefreshPageButton"
import StudentAttemptListItem from "../general/StudentAttemptListItem";

function buildView(item, onClick){
    return(
        <StudentAttemptListItem item={item} onClick={onClick}/>
    )
}

function TeacherHomeworks() {

    const items = useSelector(teacherHomeworks)

    const asked = useSelector(gotTeacherHomeworks)

    useEffect(() => {
        if(!asked){
            ServerConnector.getTeachersListOfHomeworks()
        }
    })

    const handleRefresh = () => {
        ServerConnector.getTeachersListOfHomeworks()
    }

    return(
        <div className="flex-vertical student-tasks height-100">
            <div className="flex-horizontal margin-bottom-13">
                <h1 className="preferences-header margin-right-15">Students' attempts</h1>
                <RefreshPageButton onClick={() => handleRefresh()}/>
            </div>
            {items !== null && items.length > 0 &&
                <div className="height-100 width-100 my-scrollbar">
                    {items.map(item => buildView(item, () => {
                            console.log("Hi!")
                        }
                    ))}
                </div>
            }
        </div>
    );

}

export default TeacherHomeworks
