import React from 'react'
import { useForm } from "react-hook-form";

import { Button, createStyles, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, Link, makeStyles, OutlinedInput, Paper, TextField, Theme, Typography } from '@material-ui/core'

// components
import InputField from "./InputField";

import { useStyles } from '../../theme/theme';

import { RegisterDataProps } from '../../interfaces';
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
            marginTop: "10px",
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

const RegisterForm: React.FC = () => {
    const classes = useStylesPage();
    const classesGlobal = useStyles();

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data: RegisterDataProps) => {
        alert(JSON.stringify(data))
    }

    return (

        <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12} >
                <Typography color="primary" variant="h1">Registar</Typography>
            </Grid>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <InputField type="Email" register={register} />
                        {errors.email && errors.email.message && <AlertMessage text={errors.email.message} type="error" />}
                    </Grid>
                    <Grid item xs={12} >
                        <InputField type="Text" register={register} />
                        {errors.person && <AlertMessage text="Este campo é obrigatório" type="error" />}
                    </Grid>
                    <Grid item xs={12} >
                        <InputField type="Password" register={register} />
                        {errors.password && <AlertMessage text="Este campo é obrigatório" type="error" />}
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <Button href="/login" className={`${classesGlobal.negativeButton} ${classes.button}`}>Iniciar Sessão</Button>
                        <Button className={`${classesGlobal.positiveButton} ${classes.button}`} type="submit">Registar</Button>
                    </Grid>
                </Grid>
            </form>

        </Grid >


    )
}

export default RegisterForm;
