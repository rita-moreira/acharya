import { Button, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react'

import { useStyles } from "../theme/theme";

import { useRouter } from 'next/router';

const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginLeft: "50%",
            transform: "translate(-50%)",
            width: "100%",
            height: "40vh",
            textAlign: "center"
        },
        title1: {
            marginTop: "10vh"
        }
    }),
);

const VerifyEmail = () => {
    const classesGlobal = useStyles();
    const classes = useStylesPage();
    const router = useRouter();

    const verifyEmail = async () => {
        const response = await fetch("/api/auth/verify-email", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ verifyEmail: router.query.token }),
        });
        const data = await response.json();
        if (data.error) {
            console.log(data.error)
        } else {
            router.push("/login");
        }

    }
    return (
        <div className={classesGlobal.pageBackground}>
            <Paper square className={classes.paper}>
                <Typography color="primary" variant="h2" className={classes.title1}>Obrigada por te juntares a nós</Typography>
                <Typography color="primary" variant="h1" className={classes.title1}>Completa o teu registro ao clicares no link abaixo</Typography>
                <Button onClick={verifyEmail}>Login</Button>
            </Paper>
        </div>
    )
}

export default VerifyEmail;
