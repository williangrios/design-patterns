export default class Logger {
    private static instance: Logger | null = null

    private constructor(){

    }

    public static getInstance(): Logger{
        if (!Logger.instance){
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    public log(message: string):void {
        const timestamp = new Date()
        console.log(`[${timestamp.toLocaleString()}] - ${message}`);
    }
}