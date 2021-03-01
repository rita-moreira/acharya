import React from 'react';

//components
import BigNavbar from "../components/navbar/BigNavbar";

//theme
import { useStyles } from "../theme/theme";

const Home = () => {
    const classesGlobal = useStyles();

    return (
        <div className={classesGlobal.pageBackground}>
            <BigNavbar />
        </div>
    )
};

export default Home;
