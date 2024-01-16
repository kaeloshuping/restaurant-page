// This class will be responsible for loading the web page content
class LoadPage {

    // Initialise constructor with a page container to load
    constructor(pageContainer) {
        this.container = pageContainer;
    };

    // this method loads the current page selected from the tabs 
    get currentPage() {
        const contentBody = document.createElement("div");

        contentBody.appendChild(this.container);

        return contentBody;
    };

    set currentPage(pageContainer) {
        this.container = pageContainer;
    }


};

export { LoadPage };
