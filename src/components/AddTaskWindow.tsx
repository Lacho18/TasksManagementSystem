import { useState } from "react";
import "../styles/AddTaskWindow.css";
import tasks from "../data/tasks";

import Task from "../data/Task";
import User from "../data/User";

interface TaskManagerData {
    selectedWindow: boolean;
    taskHandler: () => void;
    currentUser: User;
}

export default function AddTaskWindow(props: TaskManagerData) {
    const [newTask, setNewTask] = useState<Task>({
        id: 0,
        title: "",
        description: "",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: props.currentUser.name.firstName + " " + props.currentUser.name.lastName,
            image: props.currentUser.image
        }
    });

    function changeHandler(event: any) {
        setNewTask(oldTask => {
            if (event.target.name !== "beginDate" && event.target.name !== "endDate") {
                return { ...oldTask, [event.target.name]: event.target.value };
            }
            else {
                return { ...oldTask, [event.target.name]: new Date(event.target.value) };
            }
        });
    }

    function submitHandler(e: any) {
        e.preventDefault();
        let keys = Object.keys(newTask);

        newTask.id = tasks.length + 1;
        tasks.push(newTask);
        props.taskHandler();
    }

    return (
        <div className="add-task-window" style={props.selectedWindow ? { display: "flex" } : { display: "none" }}>
            <div className="add-task-title" style={{ flexBasis: "20%" }}>
                <p>Add new task to the list</p>
            </div>
            <div className="form-div" style={{ flexBasis: "80%" }}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="title">Enter task title</label>
                    <input type="text" placeholder="task title" name="title" onChange={changeHandler} />
                    <label htmlFor="beginDate">Enter begin date</label>
                    <input type="date" name="beginDate" onChange={changeHandler} />
                    <label htmlFor="endDate">Enter end date</label>
                    <input type="date" name="endDate" onChange={changeHandler} />
                    <label htmlFor="description">Give task description</label>
                    <textarea name="description" onChange={changeHandler}></textarea>
                    <input type="submit" />
                </form>
            </div>
            <button className="close-button" onClick={() => { props.taskHandler() }}>X</button>
        </div>
    );
}