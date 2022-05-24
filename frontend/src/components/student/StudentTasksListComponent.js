import React, { useEffect, useState } from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import './ListComponent.css'
import ServerConnector from "../../middleware/ServerConnector";
import { useSelector } from "react-redux";
import { gotStudentTasks, studentTasks } from '../../redux/selectors'
import RefreshPageButton from "../widgets/RefreshPageButton";
import StudentTaskListItem from "../general/StudentTaskListItem";

function buildView(item){
    return(
        <StudentTaskListItem item={item}/>
    )
}

function StudentTasksList() {

    const items = useSelector(studentTasks)
    const asked = useSelector(gotStudentTasks)

    useEffect(() => {
        if(!asked){
            ServerConnector.getStudentsListOfTasks()
        }
    })

    const handleRefresh = () => {
        ServerConnector.getStudentsListOfTasks()
    }

    return(
        <div className="flex-vertical student-tasks height-100">
            <div className="flex-horizontal margin-bottom-13">
                <h1 className="preferences-header margin-right-15">Hometasks</h1>
                <RefreshPageButton onClick={() => handleRefresh()}/>
            </div>
            {items !== null && <div className="height-100 width-100 my-scrollbar">
                {items.map(item => buildView(item))}
            </div>}
        </div>
    );

}

export default StudentTasksList