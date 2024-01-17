import homeImage from "../dist/images/homepage-imgs/th-1912121204.jpeg";

// This function is responsible for creating the home page
function homePage() {
    // create container for the home page content
    const homePageContentContainer = document.createElement("div");
    homePageContentContainer.id = "home-content";

    // creates the header text for the home page body
    const homePageHeader = document.createElement("h3");
    homePageHeader.id = "home-header";
    homePageHeader.innerHTML = "Welcome To The Best Local Restaurant";

    // loads the image on the home page using the "image" object
    const homePageImg = new Image();
    homePageImg.src = homeImage;

    // creates the footer text for the home page body
    const homePageFooter = document.createElement("h4");
    homePageFooter.id = "home-footer";
    homePageFooter.innerHTML = "Click on our MENU tab for our menu and the ABOUT tab to learn more about us!";

    // adds all created homepage elements to the home page container
    homePageContentContainer.appendChild(homePageHeader);
    homePageContentContainer.appendChild(homePageImg);
    homePageContentContainer.appendChild(homePageFooter);

    // returns home page container for usage in "load page" module
    return homePageContentContainer;
}

export { homePage };