import { homePage } from "./home";
import { aboutUsPage } from "./about";
import { menuPage } from "./menu";
import { contactUsPage } from "./contact";
import "./style.css"

const content=document.querySelector("#content")
const navButtons=document.querySelectorAll("button");

function handleSwitchTab(event)
{
    switch(event.target.id)
    {
        case "home":
            console.log(event.target.id);
            homePage();
            break;
        case "menu":
            console.log(event.target.id);
            menuPage();
            break;
        case "about":
            console.log(event.target.id);
            aboutUsPage();
            break;
        case "contact":
            console.log(event.target.id);
            contactUsPage();
            break;
    }
}

navButtons.forEach((item)=>{
    item.addEventListener("click",handleSwitchTab);
});

homePage();