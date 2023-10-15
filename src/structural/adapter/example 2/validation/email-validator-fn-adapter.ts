import isEmail from "validator/lib/isEmail";
import { FnEmailValidatorProtocol } from "./email-validator-protocol";

export const emailValidatorFnAdapter:  FnEmailValidatorProtocol =(
    value: string
): boolean => {
    return isEmail(value)
}