function homePage()
{
    const content=document.querySelector("#content");
    const heading=document.createElement("h1");
    heading.textContent="Welcome To Foodies Club";
    content.appendChild(heading);
    console.log("HERE");
}
export {homePage};