import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    private realUser: SystemUserProtocol | null = null
    private realUserAddresses: SystemUserAddressProtocol[] | null = null

    constructor(firstName: string, userName: string) {
        this.firstName = firstName
        this.userName = userName
    }

    private createUser(): SystemUserProtocol{
        if (this.realUser === null){
            this.realUser = new AdminUser(this.firstName, this.userName)
        }
        return this.realUser
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        const user = this.createUser
        if (this.realUserAddresses === null){
            this.realUserAddresses = await this.realUser?.getAddresses()
        }
        return this.realUserAddresses
    }
}