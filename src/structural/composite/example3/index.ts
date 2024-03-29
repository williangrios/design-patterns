// component
interface Employee{
    getName(): string
    getSalary(): number
    getRole(): string
}

// leaves
class Developer implements Employee{
    constructor(private name: string, private salary: number){

    }

    public getName(): string {
        return this.name
    }

    public getSalary(): number {
        return this.salary
    }

    public getRole(): string {
        return "Developer"
    }
}

class Designer implements Employee{
    constructor(private name: string, private salary: number){

    }

    public getName(): string {
        return this.name
    }

    public getSalary(): number {
        return this.salary
    }

    public getRole(): string {
        return "Designer"
    }
}

// composite
interface CompositeEmployee extends Employee {
    addEmployee(employee: Employee): void   
    removeEmployee(employee: Employee): void   
    getEmployees(): Employee[]
}

class Manager implements CompositeEmployee{

    private employees: Employee[] = []

    constructor(private name: string, private salary: number){

    }

    public getName(): string {
        return this.name
    }

    public getSalary(): number {
        return this.salary
    }

    public getRole(): string {
        return "Manager"
    }

    public addEmployee(employee: Employee): void {
        this.employees.push(employee)
    }
    
    public removeEmployee(employee: Employee): void {
        const index = this.employees.indexOf(employee)
        if (index !== -1){
            this.employees.splice(index, 1)
        }
    }

    public getEmployees(): Employee[] {
        return this.employees
    }
}

// client code
let dev1 = new Developer("Jhon doe", 12000)
let dev2 = new Developer("Jane doe", 13000)
let designer = new Designer("Mark doe", 10000)
let manager = new Manager("Michael", 24000)
manager.addEmployee(dev1)
manager.addEmployee(dev2)
manager.addEmployee(designer)
console.log(manager)
console.log(manager.getRole())
console.log(manager.getSalary())
console.log(manager.getName())
console.log(manager.getEmployees()[1].getName())
console.log(manager.getEmployees()[1].getSalary())