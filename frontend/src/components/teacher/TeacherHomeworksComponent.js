import React, { useEffect } from "react"
import { getTeachersListOfHomeworks } from "../../middleware/ServerConnector"
import { useSelector } from "react-redux"
import './ListComponent.css'
import { gotTeacherHomeworks, teacherHomeworks } from "../../redux/selectors"

function buildView(item, onClick){
    return(
        <div className="list-item" onClick={() => {
            onClick()
        }}>
            Hi! I'm Adam!
        </div>
    )
}

function TeacherHomeworks() {

    const items = useSelector(teacherHomeworks)

    const asked = useSelector(gotTeacherHomeworks)
    console.log(items)

    useEffect(() => {
        if(!asked){
            getTeachersListOfHomeworks()
        }
    })

    return(
        <div className="flex-vertical student-tasks height-100">
            <h1 className="preferences-header margin-bottom-13">Students' attempts</h1>
            {items !== null && items.length > 0 &&
                <div className="height-100 width-100 my-scrollbar">
                    {items !== null && items.map(item => buildView(item, () => {
                            console.log("Hi!")
                        }
                    ))}
                </div>
            }
        </div>
    );

}

export default TeacherHomeworks
