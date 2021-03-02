
interface FieldValidations {
    required: any,
    minLength?: any,
    maxLength?: any,
    pattern?: any

}


export interface InputFieldProps{
    type: string,
    register: (FieldValidations: FieldValidations) => any,
}