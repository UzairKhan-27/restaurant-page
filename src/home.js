function homePage()
{
    const content=document.querySelector("#content");
    content.textContent="";
    const heading=document.createElement("h1");
    heading.textContent="Welcome To Foodies Club";
    heading.classList.add("home-heading");
    content.style.display="flex";
    content.appendChild(heading);
}
export {homePage};