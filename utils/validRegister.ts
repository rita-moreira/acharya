

export const validRegister = ( email: string, person: string, password: string, role: string) => {
    if(!email || !person || !password || !role){
        return "Por favor preencha todos os campos."
    }

    if(!validateEmail(email)){
        return "O email não é válido."
    }

    if(password.length < 8 || password.length > 30 || !validatePassword(password)){
        return "A palavra-passe deve ter entre 8 e 30 caracteres e conter um número"
    }

    if(!validatePerson(person)){
        return "Inválido, por favor insire o seu nome [espaço] apelido"
    }
}

function validateEmail(email: string){
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regEx.test(email)
}

function validatePerson(person: string){
    const regEx =  /^[a-zA-Z]+\s[a-zA-Z]+$/;
    return regEx.test(person)
}

function validatePassword(password: string){
    const regEx = /[0-9]/;
    return regEx.test(password)
}