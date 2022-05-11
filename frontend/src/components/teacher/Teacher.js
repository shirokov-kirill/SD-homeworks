import TeacherHomeworks from "./TeacherHomeworksComponent"
import TeacherTasks from "./TeacherTasksComponent"
import { useState } from "react"


function Teacher() {

    const [selectedItem, setSelectedItem] = useState("tasks")

    return(
        <div className="flex-horizontal fullscreen">
            <div className="left-menu flex-vertical">
                <label className="left-menu-item" onClick={() => setSelectedItem("tasks")}>
                    Tasks
                </label>
                <div className="divider"></div>
                <label className="left-menu-item" onClick={() => setSelectedItem("homeworks")}>
                    Homeworks
                </label>
            </div>
            <div className="main">
                {selectedItem === "tasks" && <TeacherTasks/>}
                {selectedItem === "homeworks" && <TeacherHomeworks/>}
            </div>
        </div>
    )
}

export default Teacher