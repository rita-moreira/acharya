import React from 'react';
import { useForm } from "react-hook-form";

import { Button, createStyles, Grid, Link, makeStyles, Theme, Typography } from '@material-ui/core';

// components
import InputField from "./InputField";
import AlertMessage from "./AlertMessage"

import { useStyles } from '../../theme/theme';

// interface
import { LoginDataProps } from "../../interfaces/index"

// actions
import { setCookie } from "../../actions/cookies"

import { useRouter } from 'next/router';

const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: "50%",
            transform: "translate(-50%)",
            width: "500px",
            marginTop: '10%',
            textAlign: "center"
        },
        link: {
            marginTop: "15px",
            textAlign: "right",
            marginRight: "10px",
        },
        buttons: {
            marginTop: "20px",
        },
        button: {
            margin: "5px"
        }
    }),
);

const LoginForm: React.FC = () => {
    const classes = useStylesPage();
    const classesGlobal = useStyles();

    const router = useRouter();

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = async (user: LoginDataProps) => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        setCookie("token", data.refresh_token);
        router.push("/login");
        console.log(data)
    }

    return (
        <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12} >
                <Typography color="primary" variant="h1">Iniciar Sessão</Typography>
            </Grid>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <InputField type="Email" register={register} />
                        <AlertMessage text={errors?.email?.message} type="error" grow={errors.email ? true : false} />
                    </Grid>

                    <Grid item xs={12} >
                        <InputField type="Password" register={register} />
                        <AlertMessage text={errors?.password?.message} type="error" grow={errors.password ? true : false} />                    </Grid>
                    <Grid item xs={12} className={classes.link} >
                        <Link href="forgot-password">Esqueceu a palavra passe?</Link>
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <Button href="/register" className={`${classesGlobal.negativeButton} ${classes.button}`}>Registar</Button>
                        <Button className={`${classesGlobal.positiveButton} ${classes.button}`} type="submit">Iniciar Sessão</Button>
                    </Grid>
                </Grid>
            </form>

        </Grid >


    )
}

export default LoginForm;
