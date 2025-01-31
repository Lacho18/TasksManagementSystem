interface User {
    id: number;
    name: {
        firstName: string,
        lastName: string
    };
    image: string;
    age: number;
    completedTasks: number[];
}

export default User;