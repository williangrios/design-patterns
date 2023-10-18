import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName
        this.userName = userName
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    {
                        street: 'Av. Brasil',
                        id: 12
                    },
                    {
                        street: 'Av. Juá',
                        id: 132
                    }
                ])
            }, 2000)
        })
    }
}