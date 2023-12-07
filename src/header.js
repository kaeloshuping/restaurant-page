// This function creates the header of the web page containing the tabs
function header() {
    // create container for page header
    const headerContainer = document.createElement("div");
    headerContainer.id = "page-header";

    // create home, menu and header tabs with the same class name
    const homeTab = document.createElement("div");
    homeTab.className = "header-tabs";

    const menuTab = document.createElement("div");
    menuTab.className = "header-tabs";

    const aboutTab = document.createElement("div");
    aboutTab.className = "header-tabs";

    // add HTML text to tabs
    homeTab.innerHTML = "HOME";
    menuTab.innerHTML = "MENU";
    aboutTab.innerHTML = "ABOUT";

    // append tabs to the container of the page header
    headerContainer.appendChild(homeTab);
    headerContainer.appendChild(menuTab);
    headerContainer.appendChild(aboutTab);

    return headerContainer
};

// This function creates the footer of the webpage
function footer() {
    // create element for page footer
    const footer = document.createElement("div");
    footer.id = "page-footer";
    footer.innerHTML = "Created by @Copasetic Demon 2023";

    return footer;
};

export { header, footer }