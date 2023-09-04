import { ValidateEmail, ValidateNumber, ValidateString, ValidationComposite } from "./validation-composite";

const validateEmail = new ValidateEmail()
const validateNumber = new ValidateNumber()
const validateString = new ValidateString()

const validationComposite = new ValidationComposite()
validationComposite.add(validateEmail)
validationComposite.add(validateString)
console.log(validationComposite.validate('1@1'))