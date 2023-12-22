interface ICustomer {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string){

        }
}

interface ICustomerBuilder{
    setFirstName(firstName: string) : ICustomerBuilder
    setLastName(lastName: string): ICustomerBuilder
    setEmail(email: string): ICustomerBuilder
    setPhoneNumber(phoneNumber: string): ICustomerBuilder

    build(): ICustomer
}

class CustomerBuilder implements ICustomerBuilder {
    private firstName: string = ''
    private lastName: string = ''
    private email: string = ''
    private phoneNumber: string = ''
    
    public setFirstName(firstName: string): ICustomerBuilder {
        this.firstName = firstName  
        return this  
    }

    public setLastName(lastName: string): ICustomerBuilder {
        this.lastName = lastName    
        return this  
    }

    public setEmail(email: string): ICustomerBuilder {
        this.email = email
        return this  
    }

    public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber
        return this  
    }
    
    public build(): ICustomer {
        return new Customer(
            this.firstName,
            this.lastName,
            this.email, 
            this.phoneNumber
        )
    }    
}

class CustomerDirector{
    constructor(private builder: ICustomerBuilder){
    
    }

    public buildMinimalCustomer(firstName: string, lastName: string, email: string){
        return this.builder.setFirstName(firstName).setLastName(lastName).setEmail(email).build()
    }
}


const builderCustomer: ICustomerBuilder = new CustomerBuilder()
const directorCustomer: CustomerDirector = new CustomerDirector(builderCustomer)
const customer: ICustomer = directorCustomer.buildMinimalCustomer('Willian', 'Rios', 'williangrios@yahoo.com.br')

console.log(customer)

