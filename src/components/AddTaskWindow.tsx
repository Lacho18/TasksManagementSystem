import { useState } from "react";
import "../styles/AddTaskWindow.css";

interface TaskManagerData {
    selectedWindow: boolean;
    taskHandler: () => void;
}

export default function AddTaskWindow(props: TaskManagerData) {
    const [newTask, setNewTask] = useState({
        id: 0,
        title: "",
        description: "",
        beginDate: null,
        endDate: null,
        completed: false,
        onTime: false,
        user: {
            name: "",
            image: ""
        }
    });

    function changeHandler(event: any) {
        setNewTask(oldTask => {
            return { ...oldTask, [event.target.name]: event.target.value };
        });

        console.log(newTask);

    }

    return (
        <div className="add-task-window" style={props.selectedWindow ? { display: "flex" } : { display: "none" }}>
            <div className="add-task-title" style={{ flexBasis: "20%" }}>
                <p>Add new task to the list</p>
            </div>
            <div className="form-div" style={{ flexBasis: "80%" }}>
                <form>
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