import "../styles/TaskManager.css";
import TasksTable from "./TasksTable";

import tasks from "../data/tasks";
import { useRef, useState } from "react";

export default function TaskManager() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagesNumber = useRef<number[]>([]);

    function getPages() {
        if (pagesNumber.current.length === 0) {
            for (let i = 0; i < Math.ceil(tasks.length / 4); i++) {
                pagesNumber.current.push(i + 1);
            }
        }
    }
    getPages();

    const currentTasks = tasks.splice(currentPage - 1, currentPage + 3);

    return (
        <div className="task-manager">
            <div style={{ flexBasis: "20%", marginBottom: "10px", marginLeft: "10px" }}>
                <p style={{ fontSize: "2em", fontWeight: "bold" }}>Tasks list</p>
            </div>
            <div style={{ flexBasis: "80%" }}>
                <div>
                    <button className="add-task-button">Add task</button>
                </div>
                <div>
                    <TasksTable currentTasks={currentTasks} />
                </div>
                <div className="pages-buttons">
                    {pagesNumber.current.map(indexValue => {
                        return <button>{indexValue}</button>
                    })}
                </div>
            </div>
        </div>
    );
}