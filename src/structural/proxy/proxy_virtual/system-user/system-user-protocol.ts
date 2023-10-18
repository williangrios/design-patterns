export type SystemUserAddressProtocol ={ street: string; id: number}
export interface SystemUserProtocol{
    firstName: string
    userName: string

    getAddresses(): Promise<SystemUserAddressProtocol[] | null>
}