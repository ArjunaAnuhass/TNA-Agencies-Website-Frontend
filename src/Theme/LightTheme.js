const { createTheme } = require("@mui/material")

export const lightTheme = createTheme({
    palette:{
        mode:"light",
        primary:{
            main:"#194759"
        },
        secondary:{
            main:"#A7F2E4"
        },
        black:{
            main:"#242E2B"
        },
        background:{
            main:"#7EBFB3",
            default:"#7EBFB3",
            paper:"#7EBFB3"
        },
        textColor:{
            main:"#111111"
        }
    }
})