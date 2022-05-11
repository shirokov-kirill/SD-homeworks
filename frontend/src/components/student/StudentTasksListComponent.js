import React, { useEffect, useState } from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import './ListComponent.css'
import { Label, Media, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Button } from "bootstrap";
import { getStudentsListOfTasks } from "../../middleware/ServerConnector";
import { useSelector } from "react-redux";
import { gotStudentTasks, studentTasks } from '../../redux/selectors'

function buildView(item, onClick){
    return(
        <div className="list-item" onClick={() => {
            onClick()
        }}>
            Hi! I'm Adam!
        </div>
    )
}

function StudentTasksList() {

    const items = useSelector(studentTasks)
    const asked = useSelector(gotStudentTasks)
    const [sortBy, setSortBy] = useState("date")
    const [order, setOrder] = useState("up")
    console.log(items)

    useEffect(() => {
        if(!asked){
            getStudentsListOfTasks()
        }
    })

    return(
        <div className="flex-vertical student-tasks height-100">

            <Modal>
                <ModalHeader>
                    Submit your task
                </ModalHeader>
                <ModalBody>
                    <Label>
                        Enter
                    </Label>
                    <Media.text>
                        Hi!
                    </Media.text>
                </ModalBody>
                <ModalFooter>
                    <Button>
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>

            <h1 className="preferences-header">Hometasks</h1>
            <div className="flex-horizontal margin-13-0">
                <label onClick={() =>{
                    setSortBy("date")
                }} className={(sortBy === "date") ? "pref-label flex-horizontal margin-right-8 active" : "pref-label flex-horizontal margin-right-8"}>
                    <div className="margin-right-9">
                        Deadline date
                    </div>
                    <div className="flex-vertical">
                        <RiArrowDropUpLine onClick={() => {
                            setSortBy("date")
                            setOrder("up")
                        }} className={(order === "up" && sortBy === "date") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                        <RiArrowDropDownLine onClick={() => {
                            setSortBy("date")
                            setOrder("down")
                        }} className={(order === "down" && sortBy === "date") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                    </div>
                </label>
                <label onS onClick={() => {
                    setSortBy("progress")
                }} className={(sortBy === "progress") ? "pref-label flex-horizontal margin-right-8 active" : "pref-label flex-horizontal margin-right-8"}>
                    <div className="margin-right-9">
                        Progress
                    </div>
                    <div className="flex-vertical">
                        <RiArrowDropUpLine onClick={() => {
                            setSortBy("progress")
                            setOrder("up")
                        }} className={(order === "up" && sortBy === "progress") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                        <RiArrowDropDownLine onClick={() => {
                            setSortBy("progress")
                            setOrder("down")
                        }} className={(order === "down" && sortBy === "progress") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                    </div>
                </label>
            </div>
            <div className="height-100 width-100 my-scrollbar">
                {items !== null && items.map(item => buildView(item, () => {
                    console.log("Hi!")
                }))}
            </div>
        </div>
    );

}

export default StudentTasksList