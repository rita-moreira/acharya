import React from 'react'

//components
import BigNavbar from "../components/navbar/BigNavbar";
import ForgotPassword from "../components/auth/ForgotPassword";

//theme
import { useStyles } from "../theme/theme";

const ForgotPasswordPage = () => {
    const classesGlobal = useStyles();

    return (
        <div className={classesGlobal.pageBackground}>
            <BigNavbar />
            <ForgotPassword />
        </div>
    )
}

export default ForgotPasswordPage;