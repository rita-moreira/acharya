import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

//materialui
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core';

//theme
import { light, dark } from '../theme/theme';

//context
import ThemeContext from '../contexts/ThemeContext';
import AuthContext from '../contexts/AuthContext';

//actions
import { getCookies } from "../actions/cookies";


const App = ({ Component, pageProps }: AppProps) => {

  const themeCookie: string = getCookies("theme");
  const [themeMode, setThemeMode] = useState<string>(themeCookie);
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Acharya</title>
      </Head>
      <ThemeContext.Provider value={{ themeMode, setThemeMode }} >
        <AuthContext.Provider value={{ auth, setAuth }}>
          <ThemeProvider theme={themeMode === 'light' ? light : dark}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
