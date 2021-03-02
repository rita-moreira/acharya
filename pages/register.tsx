import React from 'react'

//components
import BigNavbar from "../components/navbar/BigNavbar";
import RegisterForm from "../components/auth/RegisterForm";

//theme
import { useStyles } from "../theme/theme";

const register = () => {
    const classesGlobal = useStyles();

    return (
        <div className={classesGlobal.pageBackground}>
            <BigNavbar />
            <RegisterForm />
        </div>
    )
}

export default register
