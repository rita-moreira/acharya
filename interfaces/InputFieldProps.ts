
interface FieldValidations {
    required: any,
    minLength?: number,
    maxLength?: number,
    pattern?: any

}


export interface InputFieldProps{
    type: string,
    register?: (FieldValidations: FieldValidations) => any,
}