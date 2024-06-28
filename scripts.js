// Get the root element
const root = document.querySelector(":root");

//Get the style properties for the root
const style = getComputedStyle(root);

//Get the style value for the root
const primaryColor = style.getPropertyValue("--accent-primary");

//Checking if we have access to the CSS variable
console.log(primaryColor);

document.getElementById("sign-up-btn").onclick = () => {
    root.style.setProperty("--accent-primary", "#ff0000");
};