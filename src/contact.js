function contactUsPage()
{
    const content=document.querySelector("#content");
    content.textContent="";
    const contactUs=document.createElement("div");
    contactUs.classList.add("contact-us");
    content.appendChild(contactUs);

    const address=document.createElement("div");
    address.classList.add("address");
    address.textContent="Visit Our Branch at Random Location Anywhere";

    const email=document.createElement("div");
    email.classList.add("email");
    email.textContent="Email Us at foodies@gmail.com";

    const number=document.createElement("div");
    number.classList.add("number");
    number.textContent="Call us at 0300-0101010";

    contactUs.appendChild(address);
    contactUs.appendChild(email);
    contactUs.appendChild(number);
}
export  {contactUsPage}