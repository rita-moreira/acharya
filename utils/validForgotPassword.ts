export const validForgotPassword = ( email: string) => {
    if(!email){
        return "Por favor preencha todos os campos."
    }

    if(!validateEmail(email)){
        return "O email não é válido."
    }

}

function validateEmail(email: string){
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regEx.test(email)
}
