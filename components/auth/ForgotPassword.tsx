import React from 'react'

import { Button, createStyles, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, Link, makeStyles, OutlinedInput, Paper, TextField, Theme, Typography } from '@material-ui/core'

import { useForm } from "react-hook-form";

// components
import InputField from "./InputField";

import { useStyles } from '../../theme/theme';
import AlertMessage from './AlertMessage';

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

const ForgotPassword: React.FC = () => {
    const classes = useStylesPage();
    const classesGlobal = useStyles();
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => { }

    return (

        <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12} >
                <Typography color="primary" variant="h1">Esqueceu da palavra-passe?</Typography>
            </Grid>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <InputField type="Email" register={register} />
                        <AlertMessage text={errors?.email?.message} type="error" grow={errors.email ? true : false} />
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <Button href="/login" className={`${classesGlobal.negativeButton} ${classes.button}`}>Iniciar Sessão</Button>
                        <Button className={`${classesGlobal.positiveButton} ${classes.button}`} type="submit">Recuperar</Button>
                    </Grid>
                </Grid>
            </form>

        </Grid >


    )
}

export default ForgotPassword;
