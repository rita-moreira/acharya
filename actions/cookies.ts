import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const setCookie = (key: string, value: string) =>{
    const date = new Date();
    date.setDate(date.getDate() + 1);

    cookies.set(key, value, {
        path: '/',
        expires: date,
        domain: 'localhost',
    });
};

export const getCookies = (key: string) => {
    return cookies.get(key);
}
