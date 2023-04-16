class Mediator {

    private commands: { [x: string]: Function; } = {};

    registerCommand(command: MediatorCommands) {
        this.commands[command.type] = command.arg as Function;
    }

    registerCommands(commands: MediatorCommands[]) {
        commands.forEach(command => this.registerCommand(command))
    }

    dispatchCommand<TResult>({ type, arg }: MediatorCommands) {
        return this.commands[type](arg) as Promise<TResult>;
    }
}

const MEDIATOR = new Mediator();

type MediatorCommands =
    { type: "CREATE_ROLE"; arg: CreatePermissionRequest | typeof createPermissionHandler } |
    { type: "CREATE_USER"; arg: CreateUserRequest | typeof createUserHandler }


interface CreatePermissionRequest { id: string, permission: string }
interface StandardResponse { status: string, message: string }

interface CreateUserRequest { id: string, username: string }
interface CreateUserResponse { status: string, body: CreateUserRequest }

function createPermissionHandler(createPermissionDTO: CreatePermissionRequest): StandardResponse {
    return { status: 'OK', message: `Success create permission: ${createPermissionDTO.permission}` }
}

function createUserHandler(createPermissionDTO: CreateUserRequest): CreateUserResponse {
    return { status: 'OK', body: createPermissionDTO }
}

export async function testMediator(): Promise<void> {
    MEDIATOR.registerCommands([
        { type: "CREATE_ROLE", arg: createPermissionHandler },
        { type: "CREATE_USER", arg: createUserHandler }
    ])

    const result1 = await MEDIATOR.dispatchCommand<StandardResponse>({ type: "CREATE_ROLE", arg: { id: '1', permission: 'permission-1' } });
    const result2 = await MEDIATOR.dispatchCommand<CreateUserResponse>({ type: "CREATE_USER", arg: { id: '1', username: 'user-1' } });

    console.log(result1)
    console.log(result2)
}