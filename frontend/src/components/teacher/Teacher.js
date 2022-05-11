import { Outlet } from "react-router-dom";
import TeacherHeader from "./TeacherHeader";


function Teacher() {
    return(
        <div>
            <TeacherHeader/>
            <Outlet/>
        </div>
    )
}

export default Teacher