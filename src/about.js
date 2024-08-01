function aboutUsPage()
{
    const content=document.querySelector("#content");


    content.textContent="";
    const aboutUs=document.createElement("div");
    aboutUs.classList.add("about-us-text");
    content.appendChild(aboutUs);

    const aboutUsItemOne=document.createElement("div");
    aboutUsItemOne.classList.add("about-us-item");
    aboutUsItemOne.textContent="Foodies Club was founded in 2005 by a group of culinary enthusiasts who wanted to create a dining experience like no other. Our mission has always been to bring people together through a shared love of food and culture."
    aboutUs.appendChild(aboutUsItemOne);

    const aboutUsItemTwo=document.createElement("div");
    aboutUsItemTwo.classList.add("about-us-item");
    aboutUsItemTwo.textContent="At Foodies Club, we believe that food is more than just sustenance. It's an experience that should be savored and shared. We are committed to using the freshest ingredients and time-honored cooking techniques to create dishes that are both innovative and comforting."
    aboutUs.appendChild(aboutUsItemTwo);


    const aboutUsItemThree=document.createElement("div");
    aboutUsItemThree.classList.add("about-us-item");
    aboutUsItemThree.textContent= "Whether you're here for a special occasion or just a casual meal, we invite you to join us at Foodies Club. Come experience our passion for food, our commitment to quality, and our love for bringing people together."
    aboutUs.appendChild(aboutUsItemThree);


}
export  {aboutUsPage}