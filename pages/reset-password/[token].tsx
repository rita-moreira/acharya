import { Button, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react'

import { useStyles } from "../../theme/theme";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";



const ResetPassword = () => {
    const classesGlobal = useStyles();
    return (
        <div className={classesGlobal.pageBackground}>
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword;