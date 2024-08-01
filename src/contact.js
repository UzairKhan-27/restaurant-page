function contactUsPage()
{
    const content=document.querySelector("#content");
    content.textContent="";
    const heading=document.createElement("h1");
    heading.textContent="Contact Us";
    content.appendChild(heading);
}
export  {contactUsPage}