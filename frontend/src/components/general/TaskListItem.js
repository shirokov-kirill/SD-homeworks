import { useState } from "react"


export default function TaskListItem({item}){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleSubmit = (e) => {
        //TODO
        e.preventDefault()
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
                            <Label htmlFor="exp-date">Exp. Date</Label>
                            <Input type="date" id="exp-date" name="exp-date"></Input>
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