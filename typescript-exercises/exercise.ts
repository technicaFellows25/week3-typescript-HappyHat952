// Create your interfaces and enum below:

// Create your task below:

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
// console.log(task);

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
}

enum Priority 
{
    Low = 0,
    Medium,
    High
}

interface PriorityTask extends Task
{
    priority: Priority;
}


const task: PriorityTask = 
{
    id: .007,
    title: "Complete Typescript Exercises",
    description: "Go to week 8 examples, then complete assignment in typescript-exercises",
    dueDate: new Date(2025, 6, 6, 21),
    priority: Priority.Low    
}

console.log(task);

