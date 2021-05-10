import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#A0EEC0",
    secondaryColor: "#6F2DBD",
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#2A2D34",
    secondaryColor: "#fde74c",
};
