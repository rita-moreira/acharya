import React from 'react'

import { Button, createStyles, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, Link, makeStyles, OutlinedInput, Paper, TextField, Theme, Typography } from '@material-ui/core'

import { useForm } from "react-hook-form";

// components
import InputField from "./InputField";

import { useStyles } from '../../theme/theme';
import AlertMessage from './AlertMessage';

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

const ResetPasswordForm: React.FC = () => {
    const classes = useStylesPage();
    const classesGlobal = useStyles();
    const { handleSubmit, register, errors } = useForm();
    const router = useRouter();

    interface propsss {
        email: string
    }
    const onSubmit = async (password: any) => {
        const response = await fetch("/api/auth/reset-password", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: password, token: router.query.token }),
        });
        const data = await response.json();
        if (data.error) {
            console.log(data.error)
        } else {
            router.push(`/login}`);
        }


    }

    return (

        <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12} >
                <Typography color="primary" variant="h1">Esqueceu da palavra-passe?</Typography>
            </Grid>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <InputField type="Password" register={register} />
                        <AlertMessage text={errors?.password?.message} type="error" grow={errors.password ? true : false} />
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <Button className={`${classesGlobal.positiveButton} ${classes.button}`} type="submit">Mudar palavra-passe</Button>
                    </Grid>
                </Grid>
            </form>

        </Grid >


    )
}

export default ResetPasswordForm;
