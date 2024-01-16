import { LoadPage } from "./load-page";
import { header, footer } from "./header";
import { homePage } from "./home-page";
import { aboutPage } from "./about";

// create main page container
const mainContainer = document.getElementById("content");

// create new "LoadPage" object from LoadPage class
let page = new LoadPage();

page.currentPage = homePage();

let homePageContainer = page.currentPage;

// append web page header, content and footer to main page container
mainContainer.appendChild(header());
mainContainer.appendChild(homePageContainer);
mainContainer.appendChild(footer());

let tabs = document.querySelectorAll(".header-tabs");

// add event listener to header tabs to change page content upon clicking
tabs.forEach( (tab) => {
    tab.addEventListener("click", () => {
        console.log(tab.id);
        if (tab.id === "about") {
            console.log("About tab is Clicked!");
            page.currentPage = aboutPage();
            let aboutPageContainer = page.currentPage;
            console.log(aboutPageContainer.id);
            mainContainer.replaceChild(aboutPageContainer, homePageContainer);
        };
    });
});

function removeChildNodes(container) {}