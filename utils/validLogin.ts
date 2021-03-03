

export const validLogin = ( email: string, password: string) => {
    if(!email || !password){
        return "Por favor preencha todos os campos."
    }

    if(!validateEmail(email)){
        return "O email não é válido."
    }

    if(password.length < 8 || password.length > 30 || !validatePassword(password)){
        return "A palavra-passe deve ter entre 8 e 30 caracteres e conter um número"
    }
}

function validateEmail(email: string){
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regEx.test(email)
}

function validatePassword(password: string){
    const regEx = /[0-9]/;
    return regEx.test(password)
}