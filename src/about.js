function aboutUsPage()
{
    const content=document.querySelector("#content");
    content.textContent="";
    const heading=document.createElement("h1");
    heading.textContent="Welcome To About Foodies Club";
    content.appendChild(heading);
}
export  {aboutUsPage}