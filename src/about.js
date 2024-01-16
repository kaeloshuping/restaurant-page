function aboutPage() {
    // create container for about page
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-content";

    // create header text for about page
    const aboutHeader = document.createElement("div");
    aboutHeader.id = "about-header";
    aboutHeader.innerHTML = "ABOUT US";

    // create about text for about page
    let aboutText = document.createElement("div");
    aboutText.id = "about-text";
    aboutText.innerHTML = "";

    // generate 5 instances of lorem ipsum text
    for (let i = 0; i < 5; i++) {
        aboutText.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };

    // append about content to about container
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutText);

    // function returns the aboutContainer which has all other elements appended
    return aboutContainer;

}

export { aboutPage }