import "./ListItem.css"
import {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";

export default function StudentAttemptListItem({item, onClick}){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return(
        <div className="list-item" onClick={() => {onClick()}}>
            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader>Homework</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {e.preventDefault(); toggleModal()}}>
                        <FormGroup>
                            <Label htmlFor="toHometaskId">To hometask №</Label>
                            <p>{item.hometaskId}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="answer">Answer</Label>
                            <p>{item.answer}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="dateOfPost">Date of attempt</Label>
                            <p>{new Date(item.date.slice(0, -1)).toString()}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="mark">Mark</Label>
                            <p>{item.result.mark}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="results">Comment</Label>
                            <p>{item.result.comments}</p>
                        </FormGroup>
                        <Button onClick={toggleModal}>Close</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <div className="list-item" onClick={() => {
                toggleModal()
            }}>
                To hometask №{item.hometaskId} from {new Date(item.date.slice(0, -1)).toString()}
            </div>
        </div>
    )
}