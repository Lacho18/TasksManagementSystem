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

const tasks: Task[] = [
    {
        id: 1,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Lachezar Genov",
            image: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
        }
    },
    {
        id: 2,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Zornica Cvetanova",
            image: "https://cdn.vectorstock.com/i/500p/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg"
        }
    },
    {
        id: 3,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Zornica Cvetanova",
            image: "https://cdn.vectorstock.com/i/500p/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg"
        }
    },
    {
        id: 4,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Hristiana Ileva",
            image: "https://cdn.vectorstock.com/i/500p/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg"
        }
    },
    {
        id: 5,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Lachezar Genov",
            image: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
        }
    },
    {
        id: 6,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Daniel Iliev",
            image: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
        }
    },
    {
        id: 7,
        title: "Make responsive design to the interface",
        description: "Make responsive design to the interface",
        beginDate: new Date(),
        endDate: new Date(),
        completed: false,
        onTime: false,
        user: {
            name: "Lachezar Genov",
            image: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
        }
    }
];

export default tasks;