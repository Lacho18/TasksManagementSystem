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

interface TasksTableProps {
    currentTasks: Task[];
}

const TasksTable: React.FC<TasksTableProps> = ({ currentTasks }) => {
    let allDates: string[] = [];

    function getDates() {
        currentTasks.forEach(indexValue => {
            let format: string = `${indexValue.beginDate.getDay()}-${indexValue.beginDate.getMonth()}-${indexValue.beginDate.getFullYear()}`;
            allDates.push(format);
        })
    }

    getDates();

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
                <div style={{ flexBasis: "15%" }}>
                    Date
                </div>
                <div style={{ flexBasis: "20%" }}>
                    View details
                </div>
            </div>
            {currentTasks.map((indexValue, index) => {
                return (
                    <div className="rows">
                        <div style={{ flexBasis: "5%" }}>#{indexValue.id}</div>
                        <div className="image-row" style={{ flexBasis: "30%" }}><img src={indexValue.user.image} /> {indexValue.user.name} </div>
                        <div style={{ flexBasis: "30%" }}>{indexValue.title}</div>
                        <div style={{ flexBasis: "15%" }}>{allDates[index]}</div>
                        <div style={{ flexBasis: "20%" }}><button className="details-button">View details</button></div>
                    </div>
                )
            })}
        </div>
    )
}

export default TasksTable;