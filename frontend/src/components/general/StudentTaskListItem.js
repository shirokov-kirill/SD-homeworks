import { useState } from "react"
import {Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Button, Input} from "reactstrap";
import "./ListItem.css"
import ServerConnector from "../../middleware/ServerConnector";


export default function StudentTaskListItem({item}){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = document.getElementById('answer').value
        document.getElementById('answer').value = ''
        ServerConnector.submitAttempt({text: text}, item.id)
        toggleModal()
    }

    return(
        <div>
            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader>Add Task</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Label htmlFor="taskname">Task Name</Label>
                            <p>{item.name}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <p>{item.task}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="todate">Until</Label>
                            <p>{item.expirationDate}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="answer">Answer</Label>
                            <Input type="textarea" id="answer" name="answer"></Input>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <div className="list-item" onClick={() => {
                toggleModal()
            }}>
                {item.name}
            </div>
        </div>
    )
}