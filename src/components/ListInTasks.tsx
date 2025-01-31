import tasks from "../data/tasks";
import "../styles/ListInTasks.css";

export default function ListInTasks() {
    let result = [];
    let completedTasks = 0;
    let onTimeCompleted = 0;

    function getCompletedTasks() {
        let count = 0;
        let onTimeCount = 0;
        tasks.forEach(task => {
            if (task.completed) {
                count++;
            }

            if (task.onTime) {
                onTimeCompleted++;
            }
        });

        return [count, onTimeCount];
    }

    result = getCompletedTasks();
    completedTasks = result[0];
    onTimeCompleted = result[1];

    return (
        <div className="list-tasks">
            <div style={{ backgroundColor: "#f29a16" }}>
                <p>All tasks</p>
                <p className="number-in-list">{tasks.length}</p>
            </div>
            <div style={{ backgroundColor: "#37bf0d" }}>
                <p>Completed tasks</p>
                <p className="number-in-list">{completedTasks}</p>
            </div>
            <div style={{ backgroundColor: "#f52727" }}>
                <p>Uncompleted tasks</p>
                <p className="number-in-list">{tasks.length - completedTasks}</p>
            </div>
            <div style={{ backgroundColor: "#83f531" }}>
                <p>On time tasks</p>
                <p className="number-in-list">{onTimeCompleted}</p>
            </div>
        </div>
    );
}