import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { Button, createStyles, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, Link, makeStyles, OutlinedInput, Paper, Radio, RadioGroup, TextField, Theme, Typography } from '@material-ui/core'

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
        },
        radioLabel: {
            color: theme.palette.primary.main
        }
    }),
);

const RegisterForm: React.FC = () => {
    const classes = useStylesPage();
    const classesGlobal = useStyles();
    const [value, setValue] = useState('cliente');

    const { handleSubmit, register, errors } = useForm();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const onSubmit = async (user: RegisterDataProps) => {
        console.log(user)
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();

        console.log(data)
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
                        <AlertMessage text={errors?.email?.message} type="error" grow={errors.email ? true : false} />
                    </Grid>
                    <Grid item xs={12} >
                        <InputField type="Text" register={register} />
                        <AlertMessage text={errors?.person?.message} type="error" grow={errors.person ? true : false} />
                    </Grid>
                    <Grid item xs={12} >
                        <InputField type="Password" register={register} />
                        <AlertMessage text={errors?.password?.message} type="error" grow={errors.password ? true : false} />
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="role" name="role" value={value} onChange={handleChange} >
                                <FormControlLabel value="cliente" control={<Radio color="primary" className={classes.radioLabel} />} className={classes.radioLabel}
                                    inputRef={register({ required: true })} label="Cliente" />
                                <FormControlLabel value="perito" control={<Radio color="primary" className={classes.radioLabel} />} className={classes.radioLabel}
                                    inputRef={register({ required: true })} label="Perito" />
                            </RadioGroup>
                        </FormControl>
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
