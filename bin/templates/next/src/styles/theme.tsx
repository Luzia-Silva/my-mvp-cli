import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: '#000',
                color: '#fff'
            },
        }
    },
    colors: {
        blue: {
            "700": "#005270",
        },
        gray: {
            "100": "#788387",
            "50": "#EDEDF3"
        },
        black: {
            "100": "#303B3F"
        }
    }
});