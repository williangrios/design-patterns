export default interface EmailValidatorProtocol{
    isEmail: FnEmailValidatorProtocol
}

export interface FnEmailValidatorProtocol{
    (value: string): boolean
}