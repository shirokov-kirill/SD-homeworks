import React, { useEffect, useState } from "react"
import './ListComponent.css'
import ServerConnector from "../../middleware/ServerConnector";
import { useSelector } from "react-redux";
import { gotTeacherTasks, teacherTasks } from '../../redux/selectors'
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
import AddTaskButton from "../widgets/AddTaskButton";
import RefreshPageButton from "../widgets/RefreshPageButton";
import TeacherTaskListItem from "../general/TeacherTaskListItem";

function buildView(item){
    return(
        <TeacherTaskListItem item={item}/>
    )
}

function TeacherTasks() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const items = useSelector(teacherTasks)
    const asked = useSelector(gotTeacherTasks)

    useEffect(() => {
        if(!asked){
            ServerConnector.getTeachersListOfTasks()
        }
    })

    const onAddTaskClicked = () => {
        setIsModalOpen(!isModalOpen)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleRefresh = () => {
        ServerConnector.getTeachersListOfTasks()
    }

    const handleSubmit = (e) => {
        toggleModal()
        const taskname = document.getElementById('taskname').value
        const description = document.getElementById('description').value
        const expdate = document.getElementById('exp-date').value
        const checker = document.getElementById('checker').value
        const fromDate = document.getElementById('fromdate').value
        document.getElementById('taskname').value = ''
        document.getElementById('description').value = ''
        document.getElementById('exp-date').value = ''
        document.getElementById('checker').value = ''
        document.getElementById('fromdate').value = ''
        const task = {
            name: taskname,
            description: description,
            expirationDate: expdate,
            date: fromDate,
            checker: checker
        }
        ServerConnector.appendTask(task)
        e.preventDefault()
    }

    return(
        <React.Fragment>

            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader>Add Task</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Label htmlFor="taskname">Task Name</Label>
                            <Input type="text" id="taskname" name="taskname"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="textarea" id="description" name="description"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="fromdate">From Date</Label>
                            <Input type="date" id="fromdate" name="fromdate"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="exp-date">Exp. Date</Label>
                            <Input type="date" id="exp-date" name="exp-date"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="checker">Checker</Label>
                            <Input type="text" id="checker" name="checker"></Input>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <div className="flex-vertical student-tasks height-100">

                <div className="flex-horizontal space-between margin-bottom-13">
                    <div className="flex-horizontal">
                        <h1 className="preferences-header margin-right-15">Tasks</h1>
                        <RefreshPageButton onClick={() => handleRefresh()}/>
                    </div>
                    <AddTaskButton onClick={onAddTaskClicked}/>
                </div>
                {items !== null && 
                    <div className="height-100 width-100 my-scrollbar">
                        {items.map(item => buildView(item))}
                    </div>
                }
            </div>
        </React.Fragment>
    );

}

export default TeacherTasks