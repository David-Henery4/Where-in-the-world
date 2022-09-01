export const getTheme = () => {
  let theme = "lightMode";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
