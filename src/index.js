import { LoadPage } from "./load-page";
import { header, footer } from "./header";
import { homePage } from "./home-page";

// create main page container
const container = document.getElementById("content");

// create new "LoadPage" object from LoadPage class
let page = new LoadPage(homePage());

// append web page header, content and footer to main page container
container.appendChild(header());
container.appendChild(page.currentPage());
container.appendChild(footer());