import React, { useEffect, useState } from "react"
import ServerConnector from "../../middleware/ServerConnector"
import { useSelector } from "react-redux"
import './ListComponent.css'
import { gotStudentAttempts, studentAttempts } from "../../redux/selectors"
import RefreshPageButton from "../widgets/RefreshPageButton"

function buildView(item, onClick){
    return(
        <div className="list-item" onClick={() => {
            onClick()
        }}>
            {item.hometaskId}
        </div>
    )
}

function StudentAttemptsList() {

    const items = useSelector(studentAttempts)

    const asked = useSelector(gotStudentAttempts)

    useEffect(() => {
        if(!asked){
            ServerConnector.getStudentsListOfAttempts()
        }
    })

    const handleRefresh = () => {
        ServerConnector.getStudentsListOfAttempts()
    }

    return(
        <div className="flex-vertical student-tasks height-100">
            <div className="flex-horizontal margin-bottom-13">
                <h1 className="preferences-header margin-right-15">Your attempts</h1>
                <RefreshPageButton onClick={() => handleRefresh()}/>
            </div>
            <div className="height-100 width-100 my-scrollbar">
                {items !== null && items.map(item => buildView(item, () => {
                    console.log("Hi!")
                }))}
            </div>
        </div>
    );

}

export default StudentAttemptsList