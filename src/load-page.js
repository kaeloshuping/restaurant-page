function loadPage () {
    const contentBody = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.innerHTML = "Welcome to the Best South African Local Restaurant";

    const image = document.createElement("img");
    image.src = "./images/th-1912121204.jpeg";

    contentBody.appendChild(h3);
    contentBody.appendChild(image);

    return contentBody;
};

export { loadPage };
