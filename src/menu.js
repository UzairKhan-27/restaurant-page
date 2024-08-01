function menuPage()
{
    const content=document.querySelector("#content");
    content.textContent="";
    const heading=document.createElement("h1");
    heading.textContent="Our Menu";
    content.appendChild(heading);
}
export  {menuPage}