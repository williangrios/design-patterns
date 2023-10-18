import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Willian', 'williangrios')
    console.log('2 seconds');
    console.log(await user.getAddresses())
    console.log('CACHE');
    for (let i = 1; i < 10; i++){
        console.log(await user.getAddresses());
    }
}

clientCode()
