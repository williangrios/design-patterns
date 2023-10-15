import EmailValidatorAdapter from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";
import EmailValidatorProtocol, { FnEmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void{
    if (emailValidator.isEmail(email)){
        console.log('email valido (classe)');
    } else{
        console.log('email invalido (classe)');
    }
}

function validaEmailFn(emailValidator: FnEmailValidatorProtocol, email: string): void{
    if (emailValidator(email)){
        console.log('email valido (fn)');
    } else{
        console.log('email invalido (fn)');
    }
}

validaEmailClass( new EmailValidatorAdapter(), 'williangrios@yahoo.com.br')
validaEmailFn( emailValidatorFnAdapter, 'williangrios@yahoo.com.br')