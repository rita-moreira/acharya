import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { createStyles, IconButton, InputAdornment, InputBase, makeStyles, Paper, Theme } from '@material-ui/core';


import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

// interface
import { InputFieldProps } from "../../interfaces"

// theme
import { secondaryColor } from "../../theme/theme"
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            textAlign: "left",
            padding: "5px",
            marginLeft: "10px",
            marginRight: "10px",

        },
        label: {
            marginLeft: "58px",
            color: "grey",
            marginTop: "5px"
        },
        input: {
            marginLeft: "10px",
            "&.Mui-focused": {
                color: secondaryColor
            },
            width: "80%",
            fontFamily: "Roboto",
        },
    }),
);


const InputField: React.FC<InputFieldProps> = ({ type, register }: InputFieldProps) => {
    const classes = useStylesPage();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Paper elevation={2} className={classes.paper} square >
                <IconButton aria-label={type}>
                    {type === "Email" ? <MailOutlineIcon color="primary" /> : type === "Password" ? <LockIcon color="primary" /> :
                        <PersonIcon color="primary" />}
                </IconButton>
                <InputBase
                    id={type}
                    required
                    inputRef={
                        type === "Email" ?
                            register({
                                required: {
                                    value: true,
                                    message: "Este campo é obrigatório"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "O email não é válido",
                                },

                            }) : type === "Password" ? register({
                                required: {
                                    value: true,
                                    message: "Este campo é obrigatório"
                                },
                                minLength: {
                                    value: 8,
                                    message: "A palavra-passe deve ter entre 8 e 30 caracteres e conter um número"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "A palavra-passe deve ter entre 8 e 30 caracteres e conter um número"
                                },
                                pattern: {
                                    value: /[0-9]/,
                                    message: "A palavra-passe deve ter entre 8 e 30 caracteres e conter um número"
                                },
                            }) : register({
                                required: {
                                    value: true,
                                    message: "Este campo é obrigatório"
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
                                    message: "Inválido, por favor insire o seu nome [espaço] apelido"
                                }
                            })
                    }
                    name={type === "Text" ? "person" : type.toLowerCase()}
                    type={type === "Text" ? "person" : type != "Password" ? type.toLowerCase() : showPassword ? "text" : "password"}
                    className={classes.input}
                    placeholder={type === "Text" ? "Nome e Apelido" : type}
                    inputProps={{ "aria-label": type }}
                    endAdornment={
                        type === "Password" ?
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    color="primary"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            : null

                    }
                />

            </Paper>
        </>
    )
}

export default InputField;
