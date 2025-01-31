import { Link } from "react-router-dom";
import Task from "../data/Task";
import User from "../data/User";
import tasks from "../data/tasks";
import { useState } from "react";

interface TasksTableProps {
    currentTasks: Task[];
    currentUser: User;
    changeVisual: () => void;
}

const TasksTable: React.FC<TasksTableProps> = (props: TasksTableProps) => {
    let allDates: string[] = [];

    function getDates() {
        props.currentTasks.forEach(indexValue => {
            let format: string = `${indexValue.beginDate.getDay()}-${indexValue.beginDate.getMonth()}-${indexValue.beginDate.getFullYear()}`;
            allDates.push(format);
        })
    }

    getDates();

    function completeTaskHandler(id: number, completed: boolean) {
        if (completed) {
            tasks[id - 1].completed = true;
            let dateOfComplete = new Date();
            if (dateOfComplete < tasks[id - 1].endDate) {
                tasks[id - 1].onTime = true;
            }
        }

        props.changeVisual();
    }

    return (
        <div className="task-table">
            <div className="rows title-row">
                <div style={{ flexBasis: "5%" }}>
                    ID
                </div>
                <div style={{ flexBasis: "30%" }}>
                    User
                </div>
                <div style={{ flexBasis: "30%" }}>
                    Title
                </div>
                <div style={{ flexBasis: "10%" }}>
                    Date
                </div>
                <div style={{ flexBasis: "20%" }}>
                    View details
                </div>
                <div style={{ flexBasis: "5%" }}>

                </div>
            </div>
            {props.currentTasks.map((indexValue, index) => {
                return (
                    <div className="rows" key={index} style={indexValue.completed ? { backgroundColor: "green" } : {}}>
                        <div style={{ flexBasis: "5%" }}>#{indexValue.id}</div>
                        <div className="image-row" style={{ flexBasis: "30%" }}><img src={indexValue.user.image} /> {indexValue.user.name} </div>
                        <div style={{ flexBasis: "30%", marginRight: "5px" }}>{indexValue.title}</div>
                        <div style={{ flexBasis: "10%" }}>{allDates[index]}</div>
                        <div style={{ flexBasis: "20%" }}><Link to={`/tasks/${indexValue.id}`} className="details-button">View details</Link></div>
                        {indexValue.user.name === props.currentUser.name.firstName + " " + props.currentUser.name.lastName ? <div className="complete-delete-buttons" style={{ flexBasis: "5%" }}>
                            <button onClick={() => { completeTaskHandler(indexValue.id, true); }}>✔️</button>
                            <button>✖️</button>
                        </div>
                            :
                            <div style={{ flexBasis: "5%" }}></div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default TasksTable;