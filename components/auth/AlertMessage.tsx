import React from 'react'
import Alert from '@material-ui/lab/Alert';

interface AlertProps {
    text: string
    type: "error" | "success"
}

const AlertMessage: React.FC<AlertProps> = ({ text, type }: AlertProps) => {
    return (
        <Alert variant="filled" severity={type}>
            {text}
        </Alert>

    )
}

export default AlertMessage;
