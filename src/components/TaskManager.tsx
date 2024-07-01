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
            <div>
                <p>Tasks list</p>
            </div>
            <div>
                <button>Add task</button>
            </div>
            <div>
                <TasksTable currentTasks={currentTasks} />
            </div>
            <div>
                {pagesNumber.current.map(indexValue => {
                    return <button>{indexValue}</button>
                })}
            </div>
        </div>
    );
}