import {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";


export default function TeacherTaskListItem({item}){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return(
        <div>
            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader>Task</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {toggleModal(); e.preventDefault()}}>
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
                            <p>{new Date(item.expirationDate.slice(0, -1)).toString()}</p>
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