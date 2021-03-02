import React, { useEffect, useState } from 'react'
import Alert from '@material-ui/lab/Alert';
import { createStyles, FormControlLabel, makeStyles, Paper, Switch, Theme } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';

const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            textAlign: "left",
            padding: "5px",
            marginLeft: "10px",
            marginRight: "10px",

        },

    }),
);

interface AlertProps {
    text: string
    type: "error" | "success",
    grow: boolean
}

const AlertMessage: React.FC<AlertProps> = ({ text, type, grow }: AlertProps) => {
    const classes = useStylesPage();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        setChecked(grow);
    }, [grow])

    return (
        <Collapse in={checked}  {...(grow ? { timeout: 500 } : { timeout: 250 })} >
            <Paper elevation={2} className={classes.paper} square  >
                <Alert severity={type} >
                    {text}
                </Alert>
            </Paper>
        </Collapse >
    )
}

export default React.memo(AlertMessage);
