interface Task {
    id: number;
    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    completed: boolean;
    onTime: boolean;
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 2,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 3,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 4,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 5,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 6,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    },
    {
        id: 7,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false
    }
];

export default tasks;