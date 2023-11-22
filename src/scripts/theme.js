export const handleDarkMode = () => {

    const darkModeButton = document.querySelector("header > button");
    const imgButton = document.querySelector("header > button > figure > img");
    const html = document.querySelector("html");
    const theme = JSON.parse(localStorage.getItem("darkmode"));
    console.log(theme);
    if (theme) {
        imgButton.setAttribute("src", "src/assets/img/sun.svg");
        html.classList.add("dark-mode");

    } else {
        imgButton.setAttribute("src", "src/assets/img/moon.svg");
        html.classList.remove("dark-mode");
    }

    darkModeButton.addEventListener("click", () => {
        html.classList.toggle("dark-mode");

        if (html.classList.contains("dark-mode")) {
            imgButton.setAttribute("src", "src/assets/img/sun.svg");
            localStorage.setItem("darkmode", true);
        } else {
            imgButton.setAttribute("src", "src/assets/img/moon.svg");
            localStorage.setItem("darkmode", false);
        }
    })
}