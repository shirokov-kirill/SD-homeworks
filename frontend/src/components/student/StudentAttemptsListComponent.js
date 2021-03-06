import React, { useEffect, useState } from "react"
import { getStudentsListOfAttempts } from "../../middleware/ServerConnector"
import { useSelector } from "react-redux"
import './ListComponent.css'

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

    const items = useSelector(state => state.student.attempts)

    useEffect(() => {
        getStudentsListOfAttempts()
    })

    return(
        <div className="flex-vertical student-tasks height-100">
            <h1 className="preferences-header margin-13-0">Attempts</h1>
            <div className="height-100 width-100 my-scrollbar">
                {items !== null && items.map(item => buildView(item, () => {
                    console.log("Hi!")
                }))}
            </div>
        </div>
    );

}

export default StudentAttemptsList