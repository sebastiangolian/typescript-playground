export type ToolType = 'brush' | 'pencil' | 'shape'

export class ToolsFactory {
    private brush
    private pencil
    private shape 

    constructor() {
        this.brush = new Brush(10, 'red');
        this.pencil = new Pencil(1, 'gray');
        this.shape = new Shape(20, 'green');
    }

    getTool(tool: ToolType) : Tool {
        switch(tool) {
            case 'brush':
                return this.brush;
            case 'pencil':
                return this.pencil;
            case 'shape':
                return this.shape;
        }
    }
}


interface Tool {}

class Brush implements Tool {
    constructor(size: number, color: string) {}
}

class Pencil implements Tool {
    constructor(size: number, color: string) {}
}

class Shape implements Tool {
    constructor(size: number, color: string) {}
}