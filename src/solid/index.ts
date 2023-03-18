
interface Store {
    tasks: TaskModel[]
}

interface TaskModel {
    id: number, 
    title: string, 
    deadline: Date
}

class Task {
    constructor(private id: number, private title: string, private deadline: Date) { }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title + "(" + this.deadline + ")";
    }
}

class Database {
    private static instance: Database
    private store: Store = {
        tasks: []
    };

    public static getInstance() {
        return this.instance || (this.instance = new this());
    }

    getStore(): Store {
        return this.store
    }
}



class TaskRepository {
    private db: Store;

    constructor() {
        this.db = Database.getInstance().getStore();
    }

    getById(id: number): TaskModel|null {
        return this.db.tasks[id]
    }

    create(task: TaskModel): void {
        this.save(task)
    }

    save(task: TaskModel): void {
        this.db.tasks[task.id] = task;
    }
}

export async function testSolid(): Promise<void> {
    const taskRepository = new TaskRepository()
    taskRepository.create({id: 1, title: 'Title', deadline: new Date})
    console.log(taskRepository.getById(1))
}