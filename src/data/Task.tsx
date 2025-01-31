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

export default Task;