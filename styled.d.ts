import "styled-components";
declare module "styled-components/native" {
    export interface DefaultTheme {
        color: {
            primary: string;
            primary_light: string;
            bgColor: string;
            grey: string;
            grey_light: string;
            white: string;
            black: string;
        };
        fontSize: {
            h1: string;
            h2: string;
            large: string;
            medium: string;
            regular: string;
            small: string;
            tiny: string;
        };
    }
}
