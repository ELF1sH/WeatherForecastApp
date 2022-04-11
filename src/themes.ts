export enum ThemeType {
    light = 0,
    dark = 1
}

export interface Theme {
    themeType : ThemeType,
    colors : {
        primary: {
            main: string,
            light: string,
            dark: string
        }
        secondary: {
            main: string,
            light: string,
            dark: string
        }
    }
}

export const lightTheme : Theme = {
    themeType: ThemeType.light,
    colors: {
        primary: {
            main: "#42a5f5",
            light: "#80d6ff",
            dark: "#0077c2"
        },
        secondary: {
            main: "#009688",
            light: "#52c7b8",
            dark: "#00675b"
        }
    }
}

export const darkTheme : Theme = {
    themeType: ThemeType.dark,
    colors: {
        primary: {
            main: "#283593",
            light: "#5f5fc4",
            dark: "#001064"
        },
        secondary: {
            main: "#00695c",
            light: "#439889",
            dark: "#003d33"
        }
    }
}