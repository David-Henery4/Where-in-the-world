
export const getTheme = () => {
    let theme = "lightMode"
    if (localStorage.getItem("theme")){
        theme = localStorage.getItem("theme")
    }
    return theme
}

// export const getToggle = () => {
//     let darkMode = false
//     if(localStorage.getItem("theme-toggle")){
//         darkMode = localStorage.getItem("theme-toggle");
//     }
//     return darkMode
// }

