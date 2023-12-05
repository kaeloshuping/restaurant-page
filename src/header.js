function header() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "page-header";

    const homeTab = document.createElement("div");
    homeTab.className = "header-tabs";
    const menuTab = document.createElement("div");
    menuTab.className = "header-tabs";
    const aboutTab = document.createElement("div");
    aboutTab.className = "header-tabs";

    homeTab.innerHTML = "HOME";
    menuTab.innerHTML = "MENU";
    aboutTab.innerHTML = "ABOUT";

    headerContainer.appendChild(homeTab);
    headerContainer.appendChild(menuTab);
    headerContainer.appendChild(aboutTab);

    return headerContainer
};

export { header }