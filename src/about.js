function aboutUsPage()
{
    const content=document.querySelector("#content");


    content.textContent="";
    const aboutUs=document.createElement("div");
    aboutUs.classList.add("about-us-text");
    aboutUs.textContent="Foodies Club was founded in 2005 by a group of culinary enthusiasts who wanted to create a dining experience like no other. Our mission has always been to bring people together through a shared love of food and culture."
    content.appendChild(aboutUs);
    aboutUs.textContent="Foodies Club was founded in 2005 by a group of culinary enthusiasts who wanted to create a dining experience like no other. Our mission has always been to bring people together through a shared love of food and culture."
    content.appendChild(aboutUs);
}
export  {aboutUsPage}