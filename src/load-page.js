// This class will be responsible for loading the web page content
class LoadPage {

    // Initialise constructor with a page container to load
    constructor(pageContainer) {
        this.container = pageContainer;
    };

    // this method loads the current page selected from the tabs 
    currentPage() {
        const contentBody = document.createElement("div");

        contentBody.appendChild(this.container);

        return contentBody;
    };


};

export { LoadPage };
