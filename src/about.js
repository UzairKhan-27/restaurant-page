function aboutUsPage()
{
    const content=document.querySelector("#content");


    content.textContent="";
    const aboutUs=document.createElement("div");
    aboutUs.classList.add("about-us-text");
    content.appendChild(aboutUs);

    const aboutUsItem=document.createElement("div");
    aboutUsItem.classList.add("about-us-item");
    aboutUsItem.textContent="Foodies Club was founded in 2005 by a group of culinary enthusiasts who wanted to create a dining experience like no other. Our mission has always been to bring people together through a shared love of food and culture."
    aboutUs.appendChild(aboutUsItem);
}
export  {aboutUsPage}