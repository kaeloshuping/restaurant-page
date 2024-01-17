import { LoadPage } from "./load-page";
import { header, footer } from "./header";
import { homePage } from "./home-page";
import { aboutPage } from "./about";
import { menuPage } from "./menu";

// create main page container
const mainContainer = document.getElementById("content");

// create new "LoadPage" object from LoadPage class
let page = new LoadPage();

page.currentPage = homePage();

let homePageContainer = page.currentPage;

// append web page header, content and footer to main page container
mainContainer.appendChild(header());
mainContainer.appendChild(page.currentPage);
mainContainer.appendChild(footer());

let tabs = document.querySelectorAll(".header-tabs");

// add event listener to header tabs to change page content upon clicking
tabs.forEach( (tab) => {
    tab.addEventListener("click", () => {
        if (tab.id === "about") {
            page.currentPage = aboutPage();
            let aboutPageContainer = page.currentPage;
            console.log(mainContainer.children[1].id);
            mainContainer.children[1].remove();
            mainContainer.insertBefore(aboutPageContainer, mainContainer.children[1]);
        } else if (tab.id === "home") {
            page.currentPage = homePage();
            homePageContainer = page.currentPage;
            console.log(mainContainer.children[1].id);
            mainContainer.children[1].remove();
            mainContainer.insertBefore(homePageContainer, mainContainer.children[1]);
        } else if (tab.id === "menu") {
            page.currentPage = menuPage();
            let menuPageContainer = page.currentPage;
            console.log(mainContainer.children[1].id);
            mainContainer.children[1].remove();
            mainContainer.insertBefore(menuPageContainer, mainContainer.children[1]);
        }
    });
});
