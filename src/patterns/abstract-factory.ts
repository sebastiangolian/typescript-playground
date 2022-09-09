interface IGrade { get(): string[] }
class LiteralGrade implements IGrade { get = () => ['A', 'B', 'C', 'D', 'E'] }
class NumberGrade implements IGrade { get = () => ['1', '2', '3', '4', '5', '6'] }

interface ITask { getName(): string }
class AddictionTask implements ITask { getName = () => 'Addiction' }
class SubtractionTask implements ITask { getName = () => 'Subtraction' }
class TheoryOfProbabilityTask implements ITask { getName = () => 'TheoryOfProbability' }
class IntegralTask implements ITask { getName = () => 'Integral' }

abstract class MathTestGenerator {
    name: string = ''
    grade: IGrade | null = null
    tasks: ITask[] = []
    abstract generateGrade(): void
    abstract generateTasks(): void

    toString(): void {
        console.log(`--- ${this.name} ---`)
        console.log("--- GRADE ---");
        console.log(this.grade?.get());
        console.log("--- TASKS ---");
        this.tasks.forEach(task => console.log(task.getName()))
    }
}

class PrimarySchoolMathTestGenerator extends MathTestGenerator {
    name: string = 'PrimarySchoolTest'

    generateGrade(): void {
        this.grade = new LiteralGrade();
    }

    generateTasks(): void {
        this.tasks = [
            new AddictionTask(),
            new SubtractionTask()
        ]
    }
}

class HighSchoolMathTestGenerator extends MathTestGenerator {
    name: string = 'HighSchoolTest'

    generateGrade(): void {
        this.grade = new NumberGrade();
    }

    generateTasks(): void {
        this.tasks = [
            new TheoryOfProbabilityTask(),
            new IntegralTask()
        ]
    }
}

class MathTest {
    private mathTestGenerator: MathTestGenerator

    constructor(mathTestGenerator: MathTestGenerator) {
        this.mathTestGenerator = mathTestGenerator;
    }

    generate(): void {
        this.mathTestGenerator.generateGrade();
        this.mathTestGenerator.generateTasks();
        this.mathTestGenerator.toString()
    }
}


export function abstractFactoryRun(): void {
    const mathTest1: MathTest = new MathTest(new PrimarySchoolMathTestGenerator());
    const mathTest2: MathTest = new MathTest(new HighSchoolMathTestGenerator());
    mathTest1.generate();
    mathTest2.generate();
}
