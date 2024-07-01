interface Task {
    id: number;
    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    completed: boolean;
    onTime: boolean;
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
        <div>
            <div>
                <div>
                    ID
                </div>
                <div>
                    User
                </div>
                <div>
                    Title
                </div>
                <div>
                    Date
                </div>
                <div>
                    View details
                </div>
            </div>
            {currentTasks.map((indexValue, index) => {
                return (
                    <div>
                        <div>#{indexValue.id}</div>
                        <div>Lachezar Genov</div>
                        <div>{indexValue.title}</div>
                        <div>{allDates[index]}</div>
                        <div><button>View details</button></div>
                    </div>
                )
            })}
        </div>
    )
}

export default TasksTable;