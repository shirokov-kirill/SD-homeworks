import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"
import "./AuthSimpleView.css"

export default function AuthSimpleView() {

    let navigate = useNavigate()
    const onStudentButtonClick = () => {
        let path = "/student/"
        navigate(path)
    }

    const onTeacherButtonClick = () => {
        let path = "/teacher/"
        navigate(path)
    }

    return(
        <div className="fullscreen items-align-center">
            <div className="container">
                <div className="row padding-bottom-50">
                    <h1 className="col-12 heading-text justify-center">
                        Choose your role
                    </h1>
                </div>
                <div className="row space-between">
                    <Button color="primary" onClick={onStudentButtonClick} className="col-6 col-md-5">
                        Student
                    </Button>
                    <Button color="primary" onClick={onTeacherButtonClick} className="col-6 col-md-5">
                        Teacher
                    </Button>
                </div>
            </div>
        </div>
    )
}