interface UserDetails {
    name: string
    age: number
    email: string
}

interface Prototype {
    clone(): Prototype
    getUserDetails(): UserDetails
}

class ConcretePrototype implements Prototype{
    constructor(private user: UserDetails) {

    }

    public clone(): Prototype {
        const clone = Object.create(this)
        clone.user = {...this.user}
        return clone
    }

    getUserDetails(): UserDetails {
        return this.user
    }
}

const user1 = new ConcretePrototype({
    name: 'Willian',
    age:18,
    email: 'williangrios@yahoo.com.br'
})

const user2 = user1.clone()

console.log(user1 === user2) // false
