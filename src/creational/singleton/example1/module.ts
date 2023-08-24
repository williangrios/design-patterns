import { MyDatabase } from "./db/my-database"

const myDatabase = MyDatabase.getInstance()
myDatabase.add({name: 'will', age: 38})
myDatabase.add({name: 'maria', age: 32})
myDatabase.add({name: 'joão', age: 42})
myDatabase.remove(1)
myDatabase.show()

const myDatabase2 = MyDatabase.getInstance()

console.log(myDatabase === myDatabase2)
