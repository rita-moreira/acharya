import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ThemeContext from '../../contexts/ThemeContext';
import AuthContext from '../../contexts/AuthContext';

import { createStyles, makeStyles, Theme, Toolbar, AppBar, Typography, Button, IconButton, Link } from '@material-ui/core';

import { primaryColor } from "../../theme/theme";
import { useStyles } from "../../theme/theme";

//icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// actions
import { setCookie } from '../../actions/cookies';


const useStylesPage = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: primaryColor,
            padding: "10px"
        },
        logo: {
            flexGrow: 1,
            marginLeft: "25px",

        },
        button: {
            marginRight: "25px"
        },
        items: {
            padding: "10px",
        },
        settings: {
            marginRight: "25px",
        },
        settingsPhoto: {
            fontSize: "60px",
        },
        welcomeMessage: {
            flexGrow: 1,
            marginLeft: "25px",
        },
        welcome: {
            float: 'left',
            marginRight: "10px",
            [theme.breakpoints.down("sm")]: {
                float: "none"
            }
        }

    }),
);

const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

const BigNavbar = () => {
    const router = useRouter();

    const classes = useStylesPage();
    const classesGlobal = useStyles();

    const { themeMode, setThemeMode } = useContext(ThemeContext);
    const { auth } = useContext(AuthContext);

    const loaded = useLoaded();

    useEffect(() => {
        setCookie('theme', themeMode);
    }, [themeMode]);

    const onChangeTheme = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.root} >
                    {auth ?
                        <>
                            <IconButton color="secondary" aria-label="open side bar" component="span" >
                                <MenuIcon />
                            </IconButton>
                            <div className={classes.welcomeMessage}>
                                <Typography color="secondary" variant="h2" className={classes.welcome} >Bem vind@ ao ACHARYA, </Typography >
                                <Typography color="secondary" variant="h2" >Nome Apelido</Typography >
                            </div>
                            <IconButton color="secondary" aria-label="open side bar" component="span" className={classes.settings}  >
                                <AccountCircleIcon className={classes.settingsPhoto} />
                            </IconButton>
                        </>
                        :
                        <>
                            <Link href="/" className={classes.logo} underline="none">
                                <Typography color="secondary" variant="h2" >ACHARYA</Typography>
                            </Link>


                            <IconButton color="secondary" aria-label="change theme mode" component="span" onClick={onChangeTheme}>
                                {loaded && themeMode === "light" ? <Brightness5Icon className={classes.items} /> : <Brightness4Icon className={classes.items} />}
                            </IconButton>
                            {router.pathname === "/" ? <Button href="/login" className={`${classesGlobal.primaryButton} ${classes.button}`}>Iniciar Sessão</Button> : null}
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default BigNavbar;
