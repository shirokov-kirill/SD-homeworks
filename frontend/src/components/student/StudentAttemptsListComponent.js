import React, { useEffect, useState } from "react"
import ServerConnector from "../../middleware/ServerConnector"
import { useSelector } from "react-redux"
import './ListComponent.css'
import { gotStudentAttempts, studentAttempts } from "../../redux/selectors"

function buildView(item, onClick){
    return(
        <div className="list-item" onClick={() => {
            onClick()
        }}>
            Hi! I'm Adam!
        </div>
    )
}

function StudentAttemptsList() {

    const items = useSelector(studentAttempts)

    const asked = useSelector(gotStudentAttempts)
    console.log(items)

    useEffect(() => {
        if(!asked){
            ServerConnector.getStudentsListOfAttempts()
        }
    })

    return(
        <div className="flex-vertical student-tasks height-100">

            <h1 className="preferences-header margin-bottom-13">Your attempts</h1>
            <div className="height-100 width-100 my-scrollbar">
                {items !== null && items.map(item => buildView(item, () => {
                    console.log("Hi!")
                }))}
            </div>
        </div>
    );

}

export default StudentAttemptsList