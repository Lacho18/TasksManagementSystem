import "../styles/TaskManager.css";
import TasksTable from "./TasksTable";

import tasks from "../data/tasks";
import { useEffect, useRef, useState } from "react";
import AddTaskWindow from "./AddTaskWindow";

interface Task {
    id: number;
    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    completed: boolean;
    onTime: boolean;
    user: {
        name: string;
        image: string;
    };
}

export default function TaskManager() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTasks, setCurrentTasks] = useState(tasks);
    const [addTask, setAddTask] = useState(false);
    const pagesNumber = useRef<number[]>([]);

    //Sets the tasks to visualize on the current page
    useEffect(() => {
        function setFirstPageTasks() {
            setCurrentTasks((): Task[] => {
                let newArray = tasks.slice((currentPage - 1) * 4, ((currentPage - 1) * 4) + 4);
                console.log(newArray);
                return newArray;
            })
        }
        setFirstPageTasks();
    }, [currentPage]);

    //Sets the current page after clicking the page button
    function clickHandler(value: number): void {
        setCurrentPage(value);
    }

    //Visualize and hides the add task window
    function addTaskHandler() {
        setAddTask(oldValue => !oldValue);
    }

    //Sets the buttons to the different pages
    function getPages() {
        if (pagesNumber.current.length === 0) {
            for (let i = 0; i < Math.ceil(tasks.length / 4); i++) {
                pagesNumber.current.push(i + 1);
            }
        }
    }
    getPages();

    return (
        <div className="task-manager">
            <div style={{ flexBasis: "20%", marginBottom: "10px", marginLeft: "10px", marginTop: "30px" }}>
                <p style={{ fontSize: "2em", fontWeight: "bold" }}>Tasks list</p>
            </div>
            <div style={{ flexBasis: "80%" }}>
                <div>
                    <button className="add-task-button" onClick={() => { addTaskHandler(); }}>Add task</button>
                </div>
                <div>
                    <TasksTable currentTasks={currentTasks} />
                </div>
                <div className="pages-buttons">
                    {pagesNumber.current.map(indexValue => {
                        return <button key={indexValue} onClick={() => { clickHandler(indexValue) }}>{indexValue}</button>
                    })}
                </div>
            </div>

            <AddTaskWindow selectedWindow={addTask} taskHandler={addTaskHandler} />
        </div>
    );
}