import { CustomerData } from './customer-data.js'

export abstract class CustomerDataParser{
    private customerData: CustomerData[] =[]

    constructor(protected filePath: string) {

    }

    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseData()
        this.hook()
        this.customerData = this.fixCpf()
    }

    protected hook(): void {}

    private fixCpf(): CustomerData[]{
        return this.customerData.map(customer => {
            return {...customer, cpf: customer.cpf.replace(/\D/g, '')}
        })
    }

    protected abstract parseData(): Promise<CustomerData[]> 
}