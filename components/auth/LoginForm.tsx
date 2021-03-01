import React from 'react'

import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'


const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: "50%",
            transform: "translate(-50%)",
            width: "500px",
            marginTop: '5%',
            textAlign: "center"
        },

    }),
);

const LoginForm = () => {
    const classes = useStylesPage();
    return (

        <Grid container className={classes.root} alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12} >
                <Typography color="primary" variant="h1">Iniciar Sessão</Typography>
            </Grid>
        </Grid>


    )
}

export default LoginForm
