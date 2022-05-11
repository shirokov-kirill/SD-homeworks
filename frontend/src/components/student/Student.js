import { useState } from "react";
import StudentAttemptsList from "./StudentAttemptsListComponent";
import StudentTasksList from "./StudentTasksListComponent";


function Student() {

    const [selectedItem, setSelectedItem] = useState("tasklist")

    return(
        <div className="flex-horizontal fullscreen">
            <div className="left-menu flex-vertical">
                <label className="left-menu-item" onClick={() => setSelectedItem("tasklist")}>
                    My tasks
                </label>
                <div className="divider"></div>
                <label className="left-menu-item" onClick={() => setSelectedItem("attempslist")}>
                    My Attempts
                </label>
            </div>
            <div className="main">
                {selectedItem === "tasklist" && <StudentTasksList/>}
                {selectedItem === "attempslist" && <StudentAttemptsList/>}
            </div>
        </div>
    )
}

export default Student