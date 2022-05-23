import "./ListItem.css"
import {useState} from "react";
import ServerConnector from "../../middleware/ServerConnector";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";

export default function StudentAttemptListItem(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return(
        <div>
            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader>Attempt</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {e.preventDefault(); toggleModal()}}>
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
                        <Button type="submit" value="submit" className="bg-primary">Close</Button>
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