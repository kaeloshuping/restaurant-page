import braaiPlate from "../dist/images/menu-imgs/braai-plate.jpeg";
import braaiPlatter from "../dist/images/menu-imgs/braai-platter.jpeg";
import bunnyChow from "../dist/images/menu-imgs/bunny-chow.jpeg";
import potjieStew from "../dist/images/menu-imgs/potjie-stew.jpeg";
import vetkoekMince from "../dist/images/menu-imgs/vetkoek&mince.jpeg";
import koeksisters from "../dist/images/menu-imgs/koeksisters.jpeg";
import malvaPudding from "../dist/images/menu-imgs/malva-pudding.jpeg";

function menuPage () {

    // create container for menu page content
    const menuMainContainer = document.createElement("div");
    menuMainContainer.id = "menu-content-container";

    // create menu images using Image method and create menu item header text
    const braaiPlateImg = new Image();
    braaiPlateImg.src = braaiPlate;

    const braaiPlateContainer = document.createElement("div");
    braaiPlateContainer.className = "menu-item";
    braaiPlateContainer.id = "braai-plate";

    const braaiPlateText = document.createElement("div");
    braaiPlateText.innerHTML = "BRAAI PLATE";
    braaiPlateText.id = "braai-plate-text";

    appendContent(braaiPlateContainer, braaiPlateText);
    appendContent(braaiPlateContainer, braaiPlateImg);


    const braaiPlatterImg = new Image();
    braaiPlatterImg.src = braaiPlatter;

    const braaiPlatterContainer = document.createElement("div");
    braaiPlatterContainer.className = "menu-item";
    braaiPlatterContainer.id = "braai-platter";

    const braaiPlatterText = document.createElement("div");
    braaiPlatterText.innerHTML = "BRAAI PLATTER";
    braaiPlatterText.id = "braai-platter-text";

    appendContent(braaiPlatterContainer, braaiPlatterText);
    appendContent(braaiPlatterContainer, braaiPlatterImg);

    const bunnyChowImg = new Image();
    bunnyChowImg.src = bunnyChow;

    const bunnyChowContainer = document.createElement("div");
    bunnyChowContainer.className = "menu-item";
    bunnyChowContainer.id = "bunny-chow";

    const bunnyChowText = document.createElement("div");
    bunnyChowText.innerHTML = "BUNNY CHOW";
    bunnyChowText.id = "bunny-chow-text";

    appendContent(bunnyChowContainer, bunnyChowText);
    appendContent(bunnyChowContainer, bunnyChowImg);

    const potjieStewImg = new Image();
    potjieStewImg.src = potjieStew;

    const potjieStewContainer = document.createElement("div");
    potjieStewContainer.className = "menu-item";
    potjieStewContainer.id = "potjie-stew";

    const potjieStewText = document.createElement("div");
    potjieStewText.innerHTML = "BEEF STEW POTJIE";
    potjieStewText.id = "potjie-stew-text";

    appendContent(potjieStewContainer, potjieStewText);
    appendContent(potjieStewContainer, potjieStewImg);

    const vetkoekMinceImg = new Image();
    vetkoekMinceImg.src = vetkoekMince;

    const vetkoekMinceContainer = document.createElement("div");
    vetkoekMinceContainer.className = "menu-item";
    vetkoekMinceContainer.id = "vetkoek-mince";

    const vetkoekMinceText = document.createElement("div");
    vetkoekMinceText.innerHTML = "VETKOEK & MINCE";
    vetkoekMinceText.id = "vetkoek-mince-text";

    appendContent(vetkoekMinceContainer, vetkoekMinceText);
    appendContent(vetkoekMinceContainer, vetkoekMinceImg);

    const koeksistersImg = new Image();
    koeksistersImg.src = koeksisters;

    const koeksistersContainer = document.createElement("div");
    koeksistersContainer.className = "menu-item";
    koeksistersContainer.id = "koeksisters";

    const koeksistersText = document.createElement("div");
    koeksistersText.innerHTML = "KOEKSISTERS";
    koeksistersText.id = "koeksister-text";

    appendContent(koeksistersContainer, koeksistersText);
    appendContent(koeksistersContainer, koeksistersImg);

    const malvaPuddingImg = new Image();
    malvaPuddingImg.src = malvaPudding;

    const malvaPuddingContainer = document.createElement("div");
    malvaPuddingContainer.className = "menu-item";
    malvaPuddingContainer.id = "malva-pudding";

    const malvaPuddingText = document.createElement("div");
    malvaPuddingText.innerHTML = "MALVA PUDDING";
    malvaPuddingText.id = "malva-pudding-text";

    appendContent(malvaPuddingContainer, malvaPuddingText);
    appendContent(malvaPuddingContainer, malvaPuddingImg);

    // append menu items to menu content container
    appendContent(menuMainContainer, braaiPlateContainer);
    appendContent(menuMainContainer, braaiPlatterContainer);
    appendContent(menuMainContainer, bunnyChowContainer);
    appendContent(menuMainContainer, potjieStewContainer);
    appendContent(menuMainContainer, vetkoekMinceContainer);
    appendContent(menuMainContainer, koeksistersContainer);
    appendContent(menuMainContainer, malvaPuddingContainer);

    return menuMainContainer;

};

// this function takes a container and elements as arguments and appends the elements to the container
function appendContent (container, content) {
    container.appendChild(content);
};

export { menuPage };