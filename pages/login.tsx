import React from 'react'

//components
import BigNavbar from "../components/navbar/BigNavbar";
import LoginForm from "../components/auth/LoginForm";

//theme
import { useStyles } from "../theme/theme";

const login = () => {
    const classesGlobal = useStyles();

    return (
        <div className={classesGlobal.pageBackground}>
            <BigNavbar />
            <LoginForm />
        </div>
    )
}

export default login
