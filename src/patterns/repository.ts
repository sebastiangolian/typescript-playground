
interface Store {
    tasks: TaskModel[]
}

interface TaskModel {
    id: number, 
    title: string, 
    deadline: Date
}

class Task {
    private task: TaskModel
    constructor(task: TaskModel) { 
        this.task = task
    }

    getId() { return this.task.id }
    getTitle() { return this.task.title + "(" + this.task.deadline + ")" }
}

class Database {
    private static instance: Database
    private store: Store = { tasks: []};

    static getInstance() { return this.instance || (this.instance = new this()) }

    getStore(): Store { return this.store }
}



class TaskRepository {
    private db: Store;

    constructor() {
        this.db = Database.getInstance().getStore();
    }

    getById(id: number): Task|null { 
        return new Task(this.db.tasks[id]) 
    }

    save(task: TaskModel): void {
        this.db.tasks[task.id] = task;
    }
}

export async function testRepository(): Promise<void> {
    const taskRepository = new TaskRepository()
    const task = {id: 1, title: "Title", deadline: new Date}
    taskRepository.save(task)
    console.log(taskRepository.getById(1)?.getTitle())
}