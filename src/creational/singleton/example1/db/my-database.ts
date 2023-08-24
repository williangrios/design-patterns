import { User } from "../interfaces/user"


export class MyDatabase {
    private static instance: MyDatabase | null = null
    private users: User[] = []

    private constructor() {

    }

    public static getInstance(): MyDatabase {
        if (MyDatabase.instance === null) {
            MyDatabase.instance = new MyDatabase()
        }
        return MyDatabase.instance
    }

    add(user: User): void{
        this.users.push(user)
    }
    
    remove(index: number): void{
        this.users.splice(index, 1)
    }

    show():void{
        for (const user of this.users){
            console.log(user)
        }
    }
}


